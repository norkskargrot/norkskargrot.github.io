+++
title = "Grappleball"
date = 2023-03-11
description = "This project was an exploration of a physics-based movement system and a continuation of my interest in procedural animation."
template = "page.html"
[extra]
headerimage = "/blog/grappleball/grappleball.png"
tags = ["Unity", "WIP"]
+++

<div class = "videoplayercontainer"><iframe src="https://player.vimeo.com/video/807003178?h=ad857a0095&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Grappleball Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

This project was originally begun as an entry for the Boss Rush Gamejam, but sadly the game was not completed beyond the unique character controller and procedural environment seen here.

The character controller and character animation system were the first thing that was worked on in this project, and are the stars of this demo. The controller features an unusual physics-based grappling-hook system to move, in which a player must utilise their momentum efficiently move swing around the environment and avoid obstacles, with only a boost and an airbrake to speed up and slow down.

An important component of controlling the character is the camera controller. The difficulty in this project with a conventional third-person camera controller is that it forces a player to be looking and firing the grappling hook in the same direction, less than ideal when a player is swinging around an object and also trying to see where they're headed. To solve this, a camera controller was introduced which slowly rotates the camera about the character when the cursor is close to the edges of the screen. This takes a little time for a player to become used to but is a significant improvement to how the game feels to play.

The character's animation is entirely procedural, with each plate on the surface of the ball moving indpendently based on what the player is doing at a given point in time. This is essential to the believeability of the jet boost or airbrake, as speeding up or slowing down mid-air doesn't look right to the player, but the ball expanding to increase it's air resitance or opening to reveal a jet engine does.

The enviroment itself is created procedurally at runtime, and was specifically designed to facilitate the player's unique mode of movement. The sand dunes feel great to roll over with speed and the jutting spires of rock are ideal targets to grapple onto and swing around.

This demo was created entirely by me, with the exceptions of the player model and texture, and the sound design, both of which were done by friends.
