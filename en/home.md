---
lang-ref: home
layout: home
title: Biodiversity in Belgium
description: Welcome to GBIF.be Hosted Portal.<br> Explore Biodiversity occurrences in our country. Discover the vibrant community of data publishers and the services offered by your Node.
background:  "{{ site.data.images.YB01.src }}"
imageLicense: "{{ site.data.images.YB01.caption }}"
height: 70vh
permalink: /
navbar:
  color: "transparent"        # What color should the navbar be?
  hasWhiteText: true          # Should the text color be white?
  floating: true
cta:
  - text: Occurrences
    href: /occurrence/search
    isPrimary: true
  - text: Community
    href: /community
  - text: Services
    href: /services
  - text: About
    href: /about
composition:
  - type: heroImage
  - type: stats
    data: examples.stats
  - type: split
    data: examples.support
#  - type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

Edit `/home.md` to change the text.
