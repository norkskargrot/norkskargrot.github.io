+++
title = "Perps trading"
date = 2026-05-11
weight = 0
description = "Designing a data-dense interface for professional traders to aggregate decentralized exchanges and take advantage of the UX improvements enabled by the Infinex platform."
template = "page.html"
[extra]
headerimage = "/design/perps/og-image.png"
company = "Infinex"
year = "2025"
scope = ["UI / UX", "Information architecture", "Data-dense design"]
+++

## Overview
Perpetuals trading poses an array of complex UX problems and considerations. With extremely dense data displays, the requirement for quickly executable forms, and huge amounts of prior art and expectations from experienced users, making UX innovations in a trading interface is a tall order. Nonetheless we were confident that we would be able to bring meaningful improvement the experience of trading crypto futures on-chain.

{{ video(src="perps-interface.mp4") }}

## Process  

### An established UX paradigm
When starting this project, we knew that crypto traders who use perps interfaces daily have strong preconceptions as to how they should work, especially in terms of layout and the feel of interactions. This meant that we had a strong baseline of patterns to start with, but it also means that any changes to these expectations have to be obviously valuable to be worth the cost of user learning. To ensure that we accomplished this, we sought feedback on the interface from traders frequently.

### Designing for extreme UI density
One key aspect of trading interfaces which traders have come to expect is that all the market information, position information, and trade execution forms should be visible all at once. This is essential as it lets users quickly cross-reference information from the market and their existing positions while executing a trade, but is a lot to display on a single screen. Tabbed, disclosed, or modal information was not an option save for a few niche cases. To accommodate for such dense UI we had to make significant extensions to our design system, allowing for smaller form elements, new data display patterns, and more. Providing users with maximum clarity in such a dense interface proved to be a fun and interesting design challenge. 

### The unique use-case of mobile
When talking to experienced traders we discovered that the way they used trading interfaces on mobile differed significantly from desktop. Due to the reduced screen space available on mobile, it was challenging to conduct the deep analysis of market data required to make informed decisions about entering new positions. The always-available portability of mobile, however, made it perfect for monitoring the positions you'd already opened on desktop, adjusting or closing them as necessary. 

When designing our mobile interface we focused on this use-case, optimising for monitoring and modifying already-open positions rather than spreading the limited available space over the entire trading experience.

<img class="xlimagewithinpost" src="/design/perps/in-app.png" alt="User flows">
<img class="xlimagewithinpost" src="/design/perps/perps-interface
.png" alt="User flows">
<img class="xlimagewithinpost" src="/design/perps/mobile.png" alt="User flows">

## Outcome
On launch, the perps experience struggled to gain initial traction in crypto communities. This was likely due to a combination of factors, including a downturn in crypto market conditions and the release of Aster and Lighter, new perps engines which drew a lot of trading activity away from hyperliquid which we initially built on top of. 

Despite initially slow growth, those who did try Infinex perps gave very positive feedback. Over the following few months we added support for other perps engines and continued to improve the interface itself, allowing the perps user base to grow over time and become Infinex's strongest revenue source.
