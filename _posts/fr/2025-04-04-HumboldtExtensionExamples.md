---
title: "Exemples de jeux de données GBIF exploitant la nouvelle extension pour les inventaires écologiques"
preTitle: April 4, 2025
date: 2025-04-04 09:10:08 +0100
author: Stijn Cooleman
categories: ["GBIF", "OPEN DATA"]
lang-ref: humboldt.2025
background: "{{ site.data.images.HUMBOLDT.src }}"
imageLicense: "{{ site.data.images.HUMBOLDT.caption }}"
---

# GBIF datasets’ examples with enhanced metadata on Ecological Inventories

## [Deux exemples basés sur le guide rapide pour les données d'enquête et de surveillance](https://docs.gbif.org/survey-monitoring-quick-start/)

Ce [nouveau manuel de GBIF](https://docs.gbif.org/survey-monitoring-quick-start/) est destiné à aider les utilisateurs de données à publier des jeux de données DarwinCore (dwc) avec l'extension Humboldt, en utilisant le vocabulaire des inventaires écologiques (eco). Nous avons utilisé ses directives pour améliorer deux jeux de données d'événements liés au suivi des oiseaux. Bien que l'extension Humboldt ne soit pas encore indexée dans GBIF, ses termes eco peuvent être récupérés dans les téléchargements de ces jeux de données, par exemple :
* [**Common breeding birds in Flanders (ABV post 2016), Belgium**](https://www.gbif.org/dataset/99047b1e-ee53-4053-ba69-2e28eaaa45d9), publié par l'INBO
* [**Bird census counts at the Zwin Nature Park (ZNP)**](https://www.gbif.org/dataset/dde71542-ad2d-4ec7-a93c-eb18bc0f432b), publié par BBPf

Ces exemples démontrent comment l'extension Humboldt peut enrichir les données sur la biodiversité en fournissant des informations contextuelles plus détaillées avec une structure hiérarchique. 
Elle est utilisée en parallèle avec les termes dwc pour améliorer les descriptions des événements, qui représentent des comptages d'oiseaux observés dans les deux jeux de données, chacun suivant une méthode d'observation standardisée significativement différente.

## L'ajout de termes eco est flexible à différents niveaux
Dans ces deux jeux de données, l'utilisation des termes dwc et eco dépend de la manière dont les comptages par points ou par transects sont hiérarchiquement regroupés au sein de la zone de comptage entière :

*  ABV : les termes eco ne sont ajoutés qu'au niveau du comptage par carré de 1x1 km (cf. `dwc:parentEventID`) et non au sous-niveau des six points de comptage maximum (cf. `dwc:eventID`) dans ce carré ;
*  ZNP : les termes eco sont ajoutés pour l'ensemble de la zone de comptage du domaine provincial du Parc Naturel du Zwin (cf. `dwc:parentEventID`) ainsi que pour le sentier intérieur, deux transects et deux points de comptage (cf. `dwc:eventID`) dans ce domaine.

En particulier, les termes `eco:siteCount`, `eco:siteNestingDescription`, `eco:geospatialScopeArea` (Valeur & Unité) et `eco:samplingEffort` (Valeur & Unité) clarifient les détails sur la manière dont les données d'occurrence sont associées aux comptages par points ou par lignes et sont imbriquées à des niveaux spatiaux et temporels supérieurs.
Une autre différence notable entre les deux jeux de données de suivi des oiseaux est l'exclusion de certains taxons dans le protocole des Oiseaux Nicheurs Communs en Flandre (ABV). 
Seul le jeu de données ABV inclut le terme `eco:excludedTaxonomicScope`, notamment pour indiquer que les goélands (Larinae), les hérons (Ardeinae),... en quête de nourriture, nichant ailleurs, ne sont pas censés être comptés dans ce projet. Cette exclusion dans le jeu de données ABV met en évidence une exception mineure au terme général `eco:targetTaxonomicScope`, qui inclut tous les oiseaux (Aves) dans les deux jeux de données.

Pour plus d'informations, contactez [Stijn Cooleman](mailto:s.cooleman@biodiversity.be), Responsable des données sur la biodiversité.
