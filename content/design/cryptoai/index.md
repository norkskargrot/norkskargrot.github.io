+++
title = "Agentic Crypto Orchestration"
date = 2026-05-11
weight = 2
description = "Improving crypto's UX crisis with a dedicated in-app agent to help orchestrate complex actions."
template = "page.html"
[extra]
headerimage = "/design/cryptoai/og-image.png"
company = "Infinex"
year = "2025"
scope = ["Agent UX", "AI Design", "Information architecture"]
+++

## Overview
Crypto's UX crisis has been described many to be the primary reason why crypto has struggled to attract a mainstream audience. The core of this crisis is that to effectively execute transactions on a blockchain, a user must interact with many different products at many different levels of the tech stack, and must have a relatively deep understanding of each.

This project explores a solution for this issue using an agentic assistant embedded in a wallet interface. A user is simply give the agent their intention, say 'I want to buy 15 ETH worth of X token', and the leave it to calculate and execute the optimal fulfillment of that goal.

<img class="xlimagewithinpost" src="/design/cryptoai/mainUI.png" alt="Agent Ui">

## Process 

### A new solution to an old problem
Tackling the crypto UX problem was Infinex's goal right from it's inception, and throughout the project's lifespan we explored many solutions. With the rise of increasingly capable AI agents, however, we saw a new opportunity. Instead of smoothing over the execution complexity with better versions of traditional UI, we could simply the need for crypto's execution UI entirely. Agents presented an entirely new interaction paradigm, where a user didn't need to care about how their transactions were executed, they just needed to tell the agent what they wanted the end result to be.

### Agentic orchestration, not execution
We discovered early on in the design process that while it made complete sense for agents to plan complex actions, it didn't yet make sense to have them execute on those plans without oversight. This was essential as a process of building user trust in the agent's decisions. 

As such, a key design decision we made was that when acting with a user's main wallet the agent is only able to propose transactions for a user to then view and execute. Once trust has been built, a user is then able to optionally delegate funds in a separate wallet to be under the agent's control more directly.

<img class="xlimagewithinpost" src="/design/cryptoai/mobile-flow.png" alt="User flows">
