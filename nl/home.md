---
lang-ref: home
layout: home
title: Biodiversiteit in België
description: Welkom bij het GBIF.be Hosted Portal.<br> Verken biodiversiteitsgegevens in ons land. Ontdek de levendige gemeenschap van datapubliceerders en de diensten die door uw Node worden aangeboden.
background:  "{{ site.data.images.YB01.src }}"
imageLicense: "{{ site.data.images.YB01.caption }}"
height: 70vh
permalink: /nl
navbar:
  color: "transparent"        # What color should the navbar be?
  hasWhiteText: true          # Should the text color be white?
  floating: true
cta:
  - text: Gevevens
    href: /nl/occurrence/search
    isPrimary: true
  - text: Gemeenschap
    href: /nl/community
  - text: Diensten
    href: /nl/services
  - text: Over
    href: /nl/about
composition:
  - type: heroImage
  - type: stats
    data: nl.examples.stats
  - type: split
    data: nl.examples.support
#  - type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

Edit `/home.md` to change the text.
