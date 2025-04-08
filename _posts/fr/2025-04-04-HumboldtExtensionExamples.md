---
title: "Utiliser l'extension Humboldt pour structurer des métadonnées de suivi"
preTitle: April 8, 2025
date: 2025-04-08 14:20:08 +0100
author: Stijn Cooleman
categories: ["GBIF", "OPEN DATA"]
lang-ref: humboldt.2025
background: "{{ site.data.images.HUMBOLDT.src }}"
imageLicense: "{{ site.data.images.HUMBOLDT.caption }}"
---

# Exemples de jeux de données GBIF avec des métadonnées améliorées sur les Inventaires Ecologiques

## Deux applications pratiques du [Survey and Monitoring Data Quick-Start Guide]( https://docs.gbif.org/survey-monitoring-quick-start/)

Ce [nouveau manuel du GBIF]( https://docs.gbif.org/survey-monitoring-quick-start/) vise à aider à publier des jeux de données DarwinCore (dwc) avec l'extension Humboldt en termes du vocabulaire des inventaires écologiques (éco). Nous avons utilisé ses directives pour améliorer deux jeux de données d'événements liés au suivi des oiseaux. Bien que l'extension Humboldt ne soit pas encore indexée dans le GBIF, ses termes éco peuvent être récupérés dans les téléchargements de ces ensembles de données, par exemple :

* [**Oiseaux nicheurs communs en Flandre (ref. ABV, l’acronyme néerlandophone de ce projet, post 2016), Belgium**](https://www.gbif.org/dataset/99047b1e-ee53-4053-ba69-2e28eaaa45d9), publié par INBO
* [**Recensement des oiseaux au Parc Naturel du Zwin (ref. ZNP)**](https://www.gbif.org/dataset/dde71542-ad2d-4ec7-a93c-eb18bc0f432b), publié par la Plateforme belge de la biodiversité

Ces exemples montrent comment l'extension Humboldt peut enrichir les données sur la biodiversité en fournissant des informations contextuelles plus détaillées avec une structure hiérarchique. Elle est utilisée en complément des termes dwc pour améliorer les descriptions des événements, qui représentent des comptages d'oiseaux observés dans les deux jeux de données, chacun suivant une méthode standardisée différente.

## Ajouter de termes éco est flexible à différents niveaux

Dans ces deux pratiques, le mapping des données des termes dwc et éco dépend de la manière dont les comptages par points ou par transects sont hiérarchiquement regroupés dans toute la zone de comptage:

* ABV: les termes éco ne sont ajoutés qu'au niveau du comptage des carrés de 1x1 km  (cf. `dwc:parentEventID`) et pas au sous-niveau des (six au maximum) comptages ponctuels (cf. `dwc:eventID`) dans ce carré;
* ZNP: les termes éco sont ajoutés pour toute la zone de comptage au domaine provincial du Parc Naturel du Zwin (cf. `dwc:parentEventID`) ainsi que pour le sentier intérieur, les deux transects et les deux points comptés (cf. `dwc:eventID`) dans ce domaine

En particulier, les termes `eco:siteCount`, `eco:siteNestingDescription`, `eco:geospatialScopeArea (Value & Unit)` et `eco:samplingEffort (Value & Unit)` précisent les détails sur la manière dont les données d'occurrence sont associées aux comptages par points ou par lignes et sont imbriquées à des niveaux spatiaux et temporels supérieurs.

Pour plus d'informations, consultez [la version anglaise de cette actualité](https://gbif.biodiversity.be/post/2025/humboldtextensionexamples/).
