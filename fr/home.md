---
lang-ref: home
layout: home
title: la biodiversité en Belgique
description: Bienvenue sur le portail hébergé GBIF.be.<br> Explorez la biodiversté de notre pays. Découvrez les éditeurs de données et les services offerts par le noeud GBIF.
background:  "{{ site.data.images.Lycaena_tityrus.src }}"
imageLicense: "{{ site.data.images.Lycaena_tityrus.caption }}"
height: 90vh
height: 70vh
permalink: /fr
navbar:
  color: "transparent"        # What color should the navbar be?
  hasWhiteText: true          # Should the text color be white?
  floating: true
cta:
  - text: Occurrences
    href: /fr/occurrence/search
    isPrimary: true
  - text: Communauté
    href: /fr/community
  - text: Services
    href: /fr/services
  - text: A propos
    href: /fr/about
composition:
  - type: heroImage
  - type: stats
    data: fr.examples.stats
  - type: stories
    data: fr.examples.stories
  - type: split
    data: fr.examples.support
#  - type: pageMarkdown # This block will render the markdown in this file so no data property needed
---

Edit `/home.md` to change the text.
