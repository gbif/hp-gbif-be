---
title: "Humboldt-extensie technieken gebruiken om metadata over monitoring te structureren"
preTitle: April 8, 2025
date: 2025-04-08 09:45:08 +0100
author: Stijn Cooleman
categories: ["GBIF", "OPEN DATA"]
lang-ref: humboldt.2025
background: "{{ site.data.images.HUMBOLDT.src }}"
imageLicense: "{{ site.data.images.HUMBOLDT.caption }}"
---

# Voorbeelden van GBIF-datasets met verbeterde metadata over Ecologische Inventarisaties

## Twee praktische toepassingen van de [Survey and Monitoring Data Quick-Start Guide]( https://docs.gbif.org/survey-monitoring-quick-start/)

Deze [nieuwe GBIF gids]( https://docs.gbif.org/survey-monitoring-quick-start/) is bedoeld om te helpen bij het publiceren van DarwinCore (dwc) datasets met de Humboldt-extensie in Ecological Inventories vocabulary (eco) termen. We hebben deze richtlijnen gevolgd om twee event-datasets te upgraden met metadata over vogelmonitoring. Hoewel de Humboldt-extensie zelf nog niet is geïndexeerd in GBIF, kunnen de eco-termen worden opgehaald door de datasets te downloaden, bijvoorbeeld:

* [**Algemene Broedvogels in Vlaanderen (ABV post 2016), Belgium**](https://www.gbif.org/dataset/99047b1e-ee53-4053-ba69-2e28eaaa45d9), gepubliceerd door het INBO
* [**Vogeltellingen in het Zwin Natuur Park (ZNP)**](https://www.gbif.org/dataset/dde71542-ad2d-4ec7-a93c-eb18bc0f432b), gepubliceerd door het Belgisch Biodiversiteitsplatform

Deze voorbeelden tonen aan hoe de Humboldt-extensie biodiversiteitsdata kan verrijken door meer gedetailleerde contextuele informatie te bieden met een hiërarchische structuur. Het wordt gebruikt naast dwc-termen om beschrijvingen van events te verbeteren: in beide datasets zijn dat tellingen van waargenomen vogels, elk volgens een verschillende gestandaardiseerde methode.

## Toevoegen van eco-termen is flexibel op verschillende niveaus. 

In deze twee praktische voorbeelden is de data-mapping van dwc- en eco-termen afhankelijk van hoe de puntentellingen of transecttellingen telkens hiërarchisch gegroepeerd zijn binnen het gehele telgebied:
* ABV: eco termen zijn enkel toegevoegd op het niveau van 1x1 km hoktelling (cf. `dwc:parentEventID`) en niet op onderliggend niveau van de maximum zes punttellingen (cf. `dwc:eventID`) per hok;
* ZNP: eco termen op meerdere niveaus toegevoegd: zowel voor het gehele telgebied van het Provinciaal Domein in het Zwin Natuur Park (cf. `dwc:parentEventID`) als voor de binnenste trail-, twee transect- en twee punttellingen (cf. `dwc:eventID`) in dat domein.

In het bijzonder verduidelijken de termen `eco:siteCount`, `eco:siteNestingDescription`, `eco:geospatialScopeArea (Value & Unit)` en `eco:samplingEffort (Value & Unit)` details over hoe de specifieke telgegevens gekoppeld zijn aan punt- of lijntellingen en genest zijn op hogere ruimtelijke en temporele niveaus.

Een ander opmerkelijk verschil tussen de twee vogelmonitoringsdatasets is de exclusie van specifieke taxa in het ABV-protocol. Alleen de ABV-dataset bevat de term `eco:excludedTaxonomicScope`, omdat we - in dat project - geen rekening houden met foeragerende meeuwen (*Larinae*), reigers (*Ardeinae*),... die elders broeden. Deze strikte uitsluiting in de ABV-dataset benadrukt een kleine uitzondering op de algemene term `eco:targetTaxonomicScope`, die alle vogels (*Aves*) in beide datasets omvat.

Voor meer information, contacteer [Stijn Cooleman](mailto:s.cooleman@biodiversity.be), data expert biodiversiteit.
