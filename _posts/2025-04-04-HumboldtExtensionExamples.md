---
title: "Using Humboldt Extension techniques to structure Monitoring metadata"
preTitle: April 4, 2025
date: 2025-04-04 09:10:08 +0100
author: Stijn Cooleman
categories: ["GBIF", "OPEN DATA"]
lang-ref: humboldt.2025
background: "{{ site.data.images.HUMBOLDT.src }}"
imageLicense: "{{ site.data.images.HUMBOLDT.caption }}"
---

# GBIF datasets’ examples with enhanced metadata on Ecological Inventories

## Two practical applications of the [Survey and Monitoring Data Quick-Start Guide]( https://docs.gbif.org/survey-monitoring-quick-start/)

That [new GBIF manual]( https://docs.gbif.org/survey-monitoring-quick-start/) aims to help publish DarwinCore (dwc) datasets with the Humboldt Extension in Ecological Inventories vocabulary (eco) terms. We've utilised its guidelines to upgrade two event datasets related to bird monitoring. Although the Humboldt Extension itself is not yet indexed in GBIF, its eco terms can be retrieved in those datasets' downloads, for instance:
* [**Common breeding birds in Flanders (ABV post 2016), Belgium**](https://www.gbif.org/dataset/99047b1e-ee53-4053-ba69-2e28eaaa45d9), published by INBO
* [**Bird census counts at the Zwin Nature Park (ZNP)**](https://www.gbif.org/dataset/dde71542-ad2d-4ec7-a93c-eb18bc0f432b), published by the Belgian Biodiversity Platform

These examples demonstrate how the Humboldt Extension can enrich biodiversity data by providing more detailed contextual information with a hierarchical structure. It is used alongside dwc terms to enhance descriptions of events, which represent counts of observed birds in both datasets, each following a significantly different standardised method.

## Adding eco terms is flexible at various levels
In those two practices, the data mapping of dwc and eco terms is depending on how the point counts or transect counts are hierarchically grouped within the entire count area:
* ABV: eco terms are only added on the 1x1 km square count level (cf. `dwc:parentEventID`) and not on the sub-level of the maximum six points counts (cf. `dwc:eventID`) within that square;
* ZNP: eco terms are added for the entire count area of Zwin Nature Park’s provincial domain (cf. `dwc:parentEventID`) as well as for the inner trail, two transects and two points counts (cf. `dwc:eventID`) within that domain.

Particularly, the terms `eco:siteCount`, `eco:siteNestingDescription`, `eco:geospatialScopeArea (Value & Unit)` and `eco:samplingEffort (Value & Unit)` clarify details about how the occurrence data are associated with point or line counts and are nested on higher spatial and temporal levels.

Another notable difference between the two bird monitoring datasets is the exclusion of specific taxa in the Common Breeding Birds in Flanders (ABV) protocol. Only the ABV dataset contains the term `eco:excludedTaxonomicScope`, especially to state that foraging gulls (*Larinae*), herons (*Ardeinae*),... breeding elsewhere, are not taken into account in this project. This exclusion in the ABV dataset highlights a minor exception to the general term `eco:targetTaxonomicScope`, which includes all birds (*Aves*) in both datasets.

For more information, contact [Stijn Cooleman](mailto:s.cooleman@biodiversity.be), Biodiversity Data Officer.
