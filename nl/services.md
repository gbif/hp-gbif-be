---
lang-ref: services
title: Diensten
description: De Belgische GBIF node biedt verschillende diensten aan
background:  "{{ site.data.images.RR02.src }}"
imageLicense: "{{ site.data.images.RR02.caption }}"
height: 70vh
permalink: /nl/services
---
Wij bieden een verscheidenheid aan diensten gerelateerd aan **Biodiversity Informatics Tools and Standards** aan de Belgische BIF-community. Of u nu data wilt publiceren of data van GBIF wilt gebruiken, onze infrastructuur en experts staan ​​klaar om u te helpen.

## Tools

### Integrated Publishing Tool

De [Integrated Publishing Toolkit](http://ipt.biodiversity.be/) (IPT) is een publicatietool ontwikkeld door GBIF, die wordt gebruikt om biodiversiteitsgegevens in het GBIF-netwerk te publiceren. Het ondersteunt verschillende gegevensinvoerformaten (databases, Excel, CSV-tekstbestanden) en helpt om uw structuur te vertalen naar de **Darwin Core** standaarden (zie onder). De IPT maakt het ook mogelijk om de metadata, die de dataset beschrijven, te bewerken en de inhoud en beschrijving samen te voegen in één enkel bestand, genaamd Darwin Core archive. Het Belgische Biodiversiteitsplatform deelt informatie over IPT's, hun toegevoegde waarde en hoe ze werken met geïnteresseerde partijen. We bieden ook technische ondersteuning voor de installatie van IPT's en kunnen IPT's hosten. ZO hosten we momenteel de IPT's van [BioFresh](http://data.freshwaterbiodiversity.eu/ipt/) en [AntaBIS](http://ipt.biodiversity.aq/).

> We bieden u hosting, helpdesk en assistentie met IPT of andere publicatietools.

### Data opschonen en valideren

Gegevens opschonen is een van de stappen die nodig zijn bij de bewerking van biodiversiteitsgegevens, met als doel de datakwaliteit te controleren. De tools die in het data opschoningsproces worden gebruikt, zijn gericht op het detecteren van omissies, typografische fouten, conventiefouten en samenhangsfouten. In dit verband raden wij het volgende aan:

- [Darwin Test](https://www.gbif.es/en/software/darwin-test/), een softwaretoepassing die records uit tabellen in DarwinCore- of DarwinCore-archiefindeling controleert en valideert.

- RDBMS zijn softwareprogramma's die je helpen bij het bouwen, beheren en gebruiken van een relationele database; dit is een verzameling gegevens die is verdeeld over specifieke en formeel gedefinieerde tabellen die onderling kunnen worden gerelateerd.Het kan worden beschouwd als een set van onderling gerefereerde spreadsheets, waarin de gegevens gemakkelijk kunnen worden geopend en herschikt zonder de oorspronkelijke structuur te wijzigen. De standaardtaal die wordt gebruikt om gegevens binnen een relationele database te manipuleren, wordt Structured Query Language (SQL) genoemd, en de relaties die worden gebruikt om de verschillende subsets van elementen over verschillende tabellen te koppelen, worden 'sleutels' genoemd. Wij maken gebruik van deze relationele databases en hun vrij beschikbare open-source beheersystemen, zoals [PostgreSQL](https://www.postgresql.org/) en [SQLite](https://www.sqlite.org/), om datasets te manipuleren, hun inhoud te controleren en mogelijke inconsistenties op te sporen.


- [OpenRefine](http://openrefine.org/) is een gratis en open-source tool om de inhoud van onopgeschoonde datasets te verkennen en op te schonen, of om het formaat ervan te wijzigen. De tool is krachtig, goed gedocumenteerd, eenvoudig in gebruik, en kan worden uitgebreid met verschillende extensies en webservices. OpenRefine kan je bijvoorbeeld helpen om reguliere expressies of clusteringfuncties te gebruiken om syntax- en coderingsfouten op te sporen en om de inhoud van je tabellen te verbeteren.
Let op dat trainingshandleidingen en achtergrondinformatie over datakwaliteit en best practices beschikbaar zijn op het [GBIF Online Resource Center](https://docs.gbif.org/documentation-guidelines/en/#current-documents) en via de Spaanse node website over [data quality](https://www.gbif.es/en/formacion/).

> We bieden u assistentie bij het opschonen en valideren van gegevendata.


### GBIF registry

Deze tool biedt gebruikers de mogelijkheid om objecten in het GBIF-register te bladeren, doorzoeken en bekijken:

- Organisaties: entiteiten die datasets publiceren en/of installaties beheren, bijvoorbeeld het Natural History Museum of Denmark.
- Datasets: verzamelingen van gegevens, bijvoorbeeld soortvoorkomsten, zoals Birds fallen at Danish Lighthouses 1883 through 1939.
- Installaties: servers waarop datasets worden gehost, bijvoorbeeld DanBIF IPT aan de Aarhus University.
- Collecties: entiteiten die voornamelijk museumcollecties beschrijven, zoals het Hacettepe University Biodiversity Advanced Research Center Genbank.
- Instellingen: entiteiten die verantwoordelijk zijn voor collecties, zoals het Hacettepe University Biodiversity Advanced Research Center (BIOSPHERE).
- GRSciColl Personeel: mensen die verbonden zijn aan instellingen, bijvoorbeeld Selim Sualp Çağlar.
- Nodes: entiteiten die GBIF-deelnemers vertegenwoordigen en verantwoordelijk zijn voor het goedkeuren van uitgevers en het coördineren van activiteiten in een geografische of thematische context, bijvoorbeeld DanBIF - Danish Biodiversity Information Facility.

> Samen met het GBIF-secretariaat onderhouden wij de Belgische data invoer in het GBIF-register.

### Global Registry of Scientific Collections (GRSciColl)

De [Global Registry of Scientific Collections](https://scientific-collections.gbif.org), of GRSciColl is een uitgebreide, door de gemeenschap beheerde repository van informatie over wetenschappelijke collecties die voortbouwt op het werk dat oorspronkelijk is gestart door het Consortium of the Barcode of Life (CBOL). Door informatie te bieden over fysieke wetenschappelijke collecties—hun inhoud, locatie, contactpersonen, betrokken instellingen en collectiecodes en -identifiers—biedt GRSciColl een bron voor een breed scala aan toepassingen door experts, onderzoekers en leden van de bredere samenleving.

> Wij ondersteunen het beheer van de metadata van Belgische instellingen en collecties.

### Specifieke Data Portalen

In de afgelopen 20 jaar hebben wij een verscheidenheid aan websites ontwikkeld:

- [African Mammalia](https://projects.biodiversity.be/africanmammalia/)
- [Afromoths](https://www.afromoths.net/) Online database rond Afrotropical motten soorten
- [Belgian biodiversity data portal](http://data.biodiversity.be/) Data gepubliceerd door België
- [Catalogue of the Lepidoptera of Belgium](https://projects.biodiversity.be/lepidoptera)
- [Freshwater Animal Diversity Assessment (FADA)](http://fada.biodiversity.be/)
- [IFBL Data portal](https://projects.biodiversity.be/ifbl/pages/metadata) - ontdek Flora Checklists van België
- [RiparIAS](https://www.riparias.be/) - Reaching Integrated and Prompt Action in Response to Invasive Alien Species
- [TrIAS](http://trias-project.be) project

> Wij ontwerpen, bouwen, implementeren en hosten deze websites. De inhoud wordt altijd aangeleverd en gecontroleerd door wetenschappelijke experts.

### Data Use tools

#### GBIF API

De [GBIF API](https://techdocs.gbif.org/en/openapi/) biedt een programmatische manier om gegevens op GBIF.org te query'en en te publiceren. Met de GBIF RESTful API kun je query's uitvoeren op Soorten, Voorkomsten, Datasets, Uitgevers, Netwerken, Literatuur, Woordenlijsten, enzovoort.

#### RGBIF

[rgbif](https://techdocs.gbif.org/en/data-use/rgbif) is een interface voor de GBIF API voor de R-statistische programmeeromgeving.

#### PyGBIF

[pygbif](https://techdocs.gbif.org/en/data-use/pygbif) is een interface voor de GBIF API voor de Python-programmeertaal.

> Wij helpen je bij het ontdekken en gebruiken van deze tools.

De [GBIF technical documentation](https://techdocs.gbif.org/en/) beschrijft hoe gebruikers toegang kunnen krijgen tot gegevens van GBIF. Het biedt informatie over de beschikbare gegevens, hoe deze op te halen, waar ze zijn opgeschoond of gecontroleerd op datakwaliteit, en hoe ze geciteerd moeten worden.

### Geografische tools

Geografische tools stellen ons in staat om geografische kaarten aan te passen om biodiversiteitsgegevens te presenteren. Bijvoorbeeld, de kaart van het Belgische Data Portaal is gemaakt met behulp van een kaart die vrij beschikbaar is op [OpenStreetMap](https://www.openstreetmap.org/). We raden Belgische wetenschappers aan gebruik te maken van de volgende geografische tools:

- [GeoPick](https://geopick.gbif.org/) is een open source online tool dat aansluit bij de [Georeferencing Best Practices (Chapman A.D. en Wieczorek J.R.)](https://docs.gbif.org/georeferencing-best-practices/1.0/en/) en dat de aanbevelingen en werkwijzen daarvan volgt.

- Geografisch Informatiesysteem (GIS): Dit zijn systemen die zijn ontworpen om alle soorten geografisch gerefereerde gegevens vast te leggen, op te slaan, te manipuleren, te analyseren, te beheren en te visualiseren. Het basisprincipe van GIS is om verschillende sets van ruimtelijke gegevens, die kunnen worden beschouwd als verschillende 'datalaag', samen te stellen. Deze lagen zijn superposeerbaar en interoperabel als ze hetzelfde geografische coördinatiesysteem gebruiken. Wij gebruiken bij voorkeur vrij beschikbare open-source GIS zoals [QGIS](https://www.qgis.org), [DIVA-GIS](https://www.diva-gis.org) of [Carto](https://carto.com/).

- Ruimtelijke uitbreidingen voor databasebeheersystemen: Deze maken het mogelijk om je database ruimtelijk te maken en de verwerking van geografische inhoud uit te voeren. Concreet kunnen geografische query's worden uitgevoerd op de ruimtelijk gemaakte gegevens via SQL (Structured Query Language) statements. Deze tools geven je de mogelijkheid om met ruimtelijke kenmerken binnen je relationele database om te gaan, en maken de gegevens ook interpreteerbaar voor GIS-software die in combinatie kan worden gebruikt. Alle gegevens die door het Belgische Biodiversiteitsplatform worden gepubliceerd, worden opgeslagen in het PostgreSQL-databasebeheersysteem met de PostGIS-ruimtelijke uitbreiding.

> Wij helpen je bij het vinden van de meest geschikte GIS-oplossing.

## Standaarden


Biodiversity Informatics standaarden zijn essentieel om interoperabiliteit te waarborgen tussen verschillende soorten gegevens die door verschillende gegevensuitgevers worden verstrekt. Standaarden maken het mogelijk om een verscheidenheid aan gegevens te begrijpen door een gemeenschappelijke 'taal' te gebruiken, zodat alle gegevens kunnen worden geïntegreerd, begrepen en verwerkt door iedereen of elk geautomatiseerd proces zonder ambiguïteit. Biodiversity Informatics standaarden zijn in het publieke domein zodat iedereen ze kan gebruiken.

Biodiversity Informatics (ook wel [TDWG](https://www.tdwg.org/) genoemd) is de belangrijkste organisatie die standaarden voor biodiversiteitsgegevens ontwikkelt. Het Belgische Biodiversiteitsplatform neemt actief deel aan TDWG en gebruikt de TDWG-standaarden referentielichaam, genaamd DarwinCore, voor een groot deel van de biodiversiteitsgegevens.

### DarwinCore

[DarwinCore](https://rs.tdwg.org/dwc/) is een verzameling van Biodiversity Informatics-standaarden ontwikkeld door TDWG. Het bevat een woordenlijst van termen die bedoeld zijn om het delen van informatie over biologische diversiteit te vergemakkelijken. Zie bijvoorbeeld de [DarwinCore-termen die de aanwezigheid van een organisme beschrijven](https://rs.gbif.org/core/dwc_occurrence.xml). Omdat deze standaard door velen wordt gebruikt, waaronder GBIF en de [Encyclopedia of Life](https://eol.org) (EOL), kan iedereen gemakkelijk een dataset begrijpen die door elk onderzoeker in elk land is waargenomen. Het Belgische Biodiversiteitsplatform helpt je om je datasets te 'mappen' naar DarwinCore, een vereiste om ze uploadbaar en begrijpelijk te maken voor iedereen op GBIF.


### EML

EML is een metadata-standaard. Metadata zijn de beschrijving van een dataset (gegevens over je gegevens) en zijn essentieel om deze begrijpelijk te maken voor iedereen. Het helpt gebruikers te begrijpen wie de dataset heeft aangemaakt, het doel ervan, de gebruikte steekproefmethoden, de taxonomische, geografische en temporele dekking, enzovoort. De context van de creatie van een dataset is belangrijke informatie voor potentiële gebruikers die willen weten of deze geschikt kan zijn voor hun eigen gebruik. EML volgt een XML-schema, waarmee de structuur en de inhoud van de metadata in één machine-leesbaar bestand kunnen worden opgenomen. De IPT-interface vergemakkelijkt de bewerking van metadata en genereert het bijbehorende EML-bestand, dat wordt toegevoegd aan de gegevens (onder een DarwinCore-geformatteerd tekstbestand) in een gecomprimeerde en klaar om te delen map genaamd 'DarwinCore Archive'.

### Catalogue of Life

Catalogue of Life (COL) heeft als doel het publiceren en beheren van checklisten te ondersteunen en een platform te bieden voor hun consistente ontdekking, gebruik en citatie. GBIF heeft enige tijd een checklistindex onderhouden en het netwerk van repositories ondersteund zodat de gemeenschap checklistgegevens kan delen. COL en GBIF hebben hun krachten gebundeld om [ChecklistBank](https://www.checklistbank.org/) een consistente basis en repository te maken voor alle COL-datasets en andere openlijk gelicenseerde soortenlijsten, inclusief diegene die door GBIF zijn gemobiliseerd en geregistreerd.

De taxonomische gemeenschap publiceert checklisten op ChecklistBank met behulp van [ColDP](https://github.com/CatalogueOfLife/coldp/blob/master/README.md), DarwinCore of ACEF-bestanden.


### Frictionless Data

[Frictionless](https://frictionlessdata.io/) is een open-source toolkit die eenvoud biedt in de data-ervaring - of je nu een CSV-bestand aan het bewerken bent of complexe pipelines aan het ontwikkelen bent.
[Camera Trap Data Package](https://camtrap-dp.tdwg.org/) (of Camtrap DP voor kort) is een door de gemeenschap ontwikkeld gegevensuitwisselingsformaat voor camera trap-gegevens. Het is gebaseerd op Frictionless-standaarden.


### Nieuw Data Model
De GBIF-community is bezig met het [diversifiëren van het datamodel](https://www.gbif.org/composition/HjlTr705BctcnaZkcjRJq/gbif-new-data-model) om de huidige beperkingen van de Darwin Core te overwinnen.

> Wij begeleiden je bij de verschillende biodiversiteitsstandaarden en informeren u over de nieuwe ideeën voor een rijker, uniform gemeenschappelijk model dat uitgebreide mogelijkheden voor het publiceren van gegevens kan ondersteunen.

## Data Management Plan

In samenwerking met The Belmont Forum en Biodiversa+ hebben we deze [Data Management Guide,een leidraad over data beheer, open data en de opstelling van gegevensbeheerplannen](https://www.biodiversa.eu/2023/10/06/discover-our-data-management-guide/). Het is een onmisbare gids, op maat gemaakt om onderzoekers te ondersteunen die betrokken zijn bij gefinancierde projecten via joint calls. Het doel is om onderzoekers te helpen bij het effectief creëren en implementeren van Data Management Plans (DMP's).

> Wij helpen je om optimaal gebruik te maken van je DMP's.
