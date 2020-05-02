---
templateKey: blog-post
title: 'I-5 Bridge Bot, a Twitter bot'
date: 2015-04-19T04:15:00.000Z
description: >-
  Every time the I-5 bridge raises for river traffic, a tweet is sent by
  @I5BridgeBot.
featuredpost: true
featuredimage: /img/i-5_bridge_lift.jpg
tags:
  - sideprojects
---
![i-5 bridge lift](/img/i-5_bridge_lift.jpg "Interstate 5 Bridge")

@I5BridgeBot is a Twitter bot that automatically sends a tweet each time the Interstate 5 bridge lifts.

This was an application I created based on what I learned at the Portland Code School JavaScript boot camp. Surprisingly, with almost no maintenance, it still functions today. It uses the Washington State Department of Transportation API to trigger a tweet each time WSDOT issues a bridge delay alert.

This bot's insides are made of node.js, the WDOT API and Heroku.

It's on my backlog to revisit the bridge bot and make it more useful for people who commute between Vancouver, Washington, and Portland, Oregon. Anyone who has been stuck in one of those bridge lifts knows a heads up comes in handy!

Visit the bridge bot at [twitter.com/i5bridgebot](https://twitter.com/i5bridgebot).
