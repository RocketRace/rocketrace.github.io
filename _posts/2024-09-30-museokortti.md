---
layout: post
title: Museum Card Workings
slug: museokortti
categories: small programming
published: false
---

Recently, the finnish digital museum card application (Museokortti) has had a major overhaul,
an update seemingly so major that it was split into an entirely new app. This update changed
the way that users authenticate their museum card. Being an avid museum visitor and programmer,
I thought to investigate how this new system works.

<!--more-->

The previous authentication flow went as follows:
1. You scan a static QR code in the museum reception containing museum metadata
2. Your client validates the QR code
3. Your client displays a success screen with your photo and museum card number
4. You show the success screen to the reception worker
5. The reception worker validates your success screen and logs your museum entry to a
   central database

This process is inefficient due to the need for two-way validation

Aside from the weirdly blurry app icon on iOS, the update itself seems pretty solid.
