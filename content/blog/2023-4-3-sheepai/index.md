+++
title = "Controlling sheep"
date = 2023-04-03
description = "Creating a boids-based controller for sheep herding behavior."
template = "page.html"
[extra]
headerimage = "/blog/2023-4-3-sheepai/sheep.png"
tags = ["Unity", "Shepherd's Crook", "AI"]
+++

<img class = imagewithinpost src="/blog/2023-4-3-sheepai/sheep.png">

Some of my friends and I have begun work on a game themed around Icelandic Shepherding, a peaceful experience where the player wanders the landscape finding and gathering their sheep. The first step i've taken in this project is to create a robust sheep AI which can provide all of the behavior the sheep in the game will need.

## High-level structure

I decided for this project to use a heavily modified boids algorithm, as it creates great looking flocking behaviour. This applies three forces to each sheep;

- Cohesion: Sheep steer towards other nearby sheep.
- Alignment: Sheep steer in the same direction as other nearby sheep.
- Avoidance: Sheep steer away from other nearby sheep who are too close.

Additional behaviours are clearly required for our sheep however, including:

- Obstacle avoidance: Sheep should steer away from or around any obstacles in their way.
- Clearing finding: Sheep should steer towards open clearings, rather than hugging fences or staying near corners where they could be trapped by a predator.
- Predator avoidance: Sheep should steer away from predator or sheepdogs.
- Herd Finding: Sheep should seek out a herd if an individual or small group ends up separated.
- Grazing: Sheep should seek out grass and eat it.

This is a lot of different forces all trying to influence how a single sheep moves and there will regularly be conflicts, with different forces pushing the sheep in different directions. In the boids algorithm these forces are balanced by having a "strength" variable for each force. Adjusting these strengths significantly changes the behaviour of the boids. For these sheep I will use a similar structure, combined with a state machine layered on top. I will have a strength variable for each force influencing the sheep's movement, but these strengths will be dynamically adjusted based on the current state.

For example:

- A sheep in the grazing state will be primarily influenced by the Grazing vector, which guides them to nearby grass to eat. The cohesion and avoidance vectors also have some influence, stopping them from wandering too far from their herd and from running into other sheep.
- When they reach this grass, they move to the eating state; all of their influences are reduced, stopping their movement.
- All of a sudden they see a predator! In the stressed state, the three boids vectors are increased, causing the herd to gather and move as one. The grazing vector is reduced to zero, and the predator avoidance vector is increased.
- The obstacle avoidance vector should always remain fairly high for obvious reasons.

## Starting with Boids

There are many great explanations of boids online, but i will provide a quick summary here. It begins with a single entity, which has a field of awareness within which other sheep will influence it's behavior. This is defined by a radius and an angle:
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/awareness.svg">

Three forces are then applied to the sheep, based on those in it's sight radius:
- Cohesion: Sheep steer towards other nearby sheep.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/cohesion.svg">
- Alignment: Sheep steer in the same direction as other nearby sheep.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/alignment.svg">
- Avoidance: Sheep steer away from other nearby sheep who are within a smaller avoidance radius.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/avoidance.svg">

Appling these three forces, with manually controlled weightings, creates fantastic behavior, which can be seen in this gif:
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/boids.gif">

## Obstacle Avoidance

Obstacle avoidance is an interesting problem for these sheep, and i read about and implemented several steering algorithms in the process of finding one which worked well for this application. The final algorithm i'm using is a two-part solution, using two sets of raycasts.

The first is a longer-distance raycast which detects any nearby obstacles in front of the sheep, and gently applies a force directing the sheep away from them. Each raycast adds it's direction multiplied by it's length before it hit an obstacle (or the maximum distance if it didn't hit) to the output direction, which is then normalised.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/obstacleavoid.svg">

This force alone means that the sheep will avoid walls fairly well, though as you can see in the gif below they still hit and slide along walls in an undesirable way when the crowding of other sheep pushes them into it.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/hittingwalls.gif">

To counteract this, a second force is added. This force is much stronger but occurs in a much smaller region around the sheep, stopping them from actually colliding with walls.
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/collision.svg">

This successfully stops the sheep from sliding along walls, but introduces some other undesirable behavior, which will be addressed in the next section:
<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/overcrowded.gif">

## Crowding

You can see at the end of the last section that while the sheep are successfully avoiding obstacles, they are crowding up significantly when they reach choke-points in the map. We could increase the "avoidance" bias in the initial boids forces, but that would actually prevent them from moving through tight gaps as the force of the sheep pushing back would turn the sheep stuck behind around, splitting the herd. The desired behavior to match real-life sheep would be to have each sheep slow down, allowing those in front to pass through before moving forward themselves. To this end, each sheep checks how many sheep are in it's field of view and limits it's maximum speed proportional to this value. This results in much improved behavior during all points of herding, but particularly in map chokepoints.

<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/crowdslowdown.gif">

## Moving to Navmeshes

Up until this point, all of the sheep AI work has been based on two fairly significant assumptions.

1. The ground which the sheep walk on is flat.
2. The obstacles which the sheep have to avoid are vertical walls.

This clearly will not be adequate for our game, as the sheep need to traverse rolling hills and mountainsides while avoiding obstacles which aren't walls, such as cliffs or rivers. Our current raycasting system for obstacle avoidance will not work for these types of obstacles, and so adjustment is required.

<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/hills.png"> 

Initially I investigated creating invisible colliders around these obstacles which the sheep could raycast into, but creating these colliders would be significant additional work when creating the map and terrain, which would be best avoided. Additionally, this doesn't solve the issue of obstacle raycasts colliding with a gentle slope which the sheep should be able to walk up.

I then investigated sampling the terrain data for this information, using the slope of the terrain to determine whether an area was walkable or not, but this was a significant performance overhead for each sheep each frame.

Finally, a much easier solution was found. By using the unity navmesh system, but not using the navmesh agent component, the sheep can still be controlled according to the boid (and other) forces, but can cast rays through the navmesh, rather than in the 3D physics environment. This means that all obstacle data can be managed by the navmesh, rather than colliders in the environment. Here you can see how the navmesh (in blue) looks on our rolling hills terrain.

<img class = smallimagewithinpost src="/blog/2023-4-3-sheepai/navmesh.png"> 

I hadn't before considered using the navmesh in this way, rather than the conventional use of pathfinding, and will keep it in mind for future projects.


## The end of part one

All of this leaves us with lovely sheep herding behavior, and we can watch sheep intelligently herd in complex environments while successfully avoiding obstacles.

<div class="youtubevideoplayer"><iframe width='100%' height='100%' src="https://www.youtube.com/embed/DGNgJEUMtnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

There is much more to do, however. The sheep shouldn't be always moving and roaming about but instead stop to graze and relax, and then run to avoid predators when they arise, or when they are being herded. I will create a second part to this post, expanding on the behavior of these sheep.