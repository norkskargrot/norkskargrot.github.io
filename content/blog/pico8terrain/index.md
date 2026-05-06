+++
title = "Pico8 Terrain Renderer"
date = 2023-03-11
description = "3D terrain rendering from scratch, built within tight performance constraints."
template = "page.html"
[extra]
headerimage = "/blog/pico8terrain/walker.png"
tags = ["Pico8", "Playable Demo", "WIP"]
+++
Built in the Pico8 engine, this project was an experiment in 3d terrain rendering from scratch.

## Playable Demo:
Use the mouse to rotate the view, and the arrow keys to move.
<iframe class= "pico8player" src="/blog/pico8terrain/walker.html"... ></iframe>

After reading about the voxel-space terrain rendering in the game Comanche: Maximum overkill (1992), I was keen to create my own implementation in Pico8. This projects was the result, and continues to be expanded far beyond the original implementation.

A fantastic resource on how the Comanche terrain rendering works can be found [here](https://github.com/s-macke/VoxelSpace).

Implementing this in Pico8 posed a significant challenge, as the engine's deliberate performance limitations made achieving a reasonable framerate an extreme optimisation puzzle. Pico8 has no gpu and does no allow for any form of parallelisation. It also limits the cpu operations which can be performed per frame. For any form of 3d-rendering this rapidly becomes a problem, meaning that 3d Pico8 applications are limited, and often rely on faux-3d techniques such as raycasting for walls or similar. Optimising this algorithm involved many tricks and pushing the limits of what is possible in Pico8.

Another issue which pico8 posed is that of data storage, where projects are generally only allowed 2kb of data for code and assets. This meant that the terrain data has to be generated on startup, which can be seen by the user. The algorithm which I implemented to create this data is a simple process of assigning random values at a given interval, bilinearly sampling these to generate data in between, and then slowly blurring the result to smooth it. This process is done twice at different scales and then combined to provide variety in the size of the noise output.

As the noise map is fairly low resolution, Bilinear sampling has to be smoothed in order to create smooth terrain. An older version of the project without the smoother sampling can be seen here;

<img class = imagewithinpost src="/blog/pico8terrain/oldterrain.gif">

The final look of the demo is largely controlled by the visual limitations of pico8, namely that the screen is constrained to a resolution of 128*128 pixels, and only 16 colours. This meant that dithering is used heavily to convey lighting in the terrain, gradients in the sunset, and more. It is a entertaining challenge to create an appealing visual style within these constraints.

Various versions of this project have been created, including features on the terrain like trees, rocks, and characters, or a runtime-generated world map to assist navigation, both visible in the gif below. These features were removed in a from-scratch rewrite of the terrain rendering, aiming to improve performance and visuals, but will return in a future version. I would also love to including a raycasting engine to draw the solid walls of buildings.

<img class = imagewithinpost src="/blog/pico8terrain/objectsonterrain.gif">

I am keen to progress this demo in the future, and to see what features I can continue to squeeze into such tight constraints.
