+++
title = "Mini Mage"
date = 2023-03-11
description = "This project was a prototype for a unique spellcrafting system, where a player is given immense control over the magic available to them."
template = "page.html"
[extra]
headerimage = "/blog/minimage/minimage.png"
tags = ["Pico8", "Playable Demo", "WIP"]
+++
This project was a prototype for a unique spellcrafting system, where a player is given immense control over the magic available to them.

## Playable Demo:

Controls;

- Use the arrow keys to move
- Press each of the two action buttons ("Z" and "X" on pc, or the onscreen "O" and "X" buttons on mobile) to use your two equipped spells.
- Press the two action buttons simultaneously to open the spellcrafting menu and change your equipped spells. More details on how spellcrafting works below.

<iframe class= "pico8player" src="/blog/minimage/minimage.html"... ></iframe>

I have always been interested in unique magic systems in video games, particularly those which give the player a lot of customisation over the spells which are available to them. This is my ongoing attempt to create my own system. The basic concept is that when creating a spell, players choose two basic parameters; the type and the shape.

The spell's type controls the effects which the spell has. For example an earth spell will leave piles of dirt, allowing a player to create barricades, a fire spell will burn trees, buildings, and enemies, or a poison spell will create clouds of gas, damaging all who pass through it.

The shape of a spell controls the form it takes when the player uses it, for example a projectile spell will be fired forward, affecting anything it hits, or leap spell will launch the player across the map, exploding wherever they land.

This spellcrafting system is easy for a player to understand, but allows for fairly deep customisation in how they can interact with the game world and the enemies they encounter.

The rendering of the world in this demo is also of note, as a custom isometric renderer had to be built to support the desired graphical style. This renders each tile separately, allowing for runtime modification of the map by the player, through the use of their spells.

In the future I would like to add another parameter to the spellcrafting, called "modifiers". These would power up or power down certain aspects of the spell, allowing for further cutomisation. This could for example include increasing the spell's range for reduced damage, or increasing it's mana cost in exchange for allowing it to pass through barriers.
