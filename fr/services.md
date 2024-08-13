---
lang-ref: services
title: Nos Services
description: Le noeud vous offre de nombreux services
background:  "{{ site.data.images.RR02.src }}"
imageLicense: "{{ site.data.images.RR02.caption }}"
height: 70vh
permalink: /fr/services
---

Nous offrons des services liés aux **outils et standards informatiques de la biodiversité** à l'ensemble de la communauté belge BIF (Biodiversity Information Facility). Vous souhaitez publier vos données ou utiliser les données ouvertes du GBIF ? Notre infrastructure et nos experts sont là pour vous aider ! Notre mission est de supporter la communauté des acteurs belges de la biodiversité à s'engager dans la démarche 'Open Data', et pour cela nous proposons un support flexible en fonction de vos besoins.

> N'hésitez pas à contacter **gbif@biodiversity.be** ou à [proposer un ensemble de données à publier sur GBIF](https://www.gbif.org/suggest-dataset) !

## Les outils

### Integrated Publishing Tool (IPT)

L'[Integrated Publishing Toolkit](http://ipt.biodiversity.be/) est un outil de publication de données développé par GBIF pour la communauté.
Il supporte différent formats de données(Base de données, Excel ou fichiers CSV) et vous aide à traduire votre structure dans le standard **Darwin Core**(voir plus bas). L'IPT vous permet aussi d'éditer vos métadonnées décrivant votre jeu de données, et d'assembler sous un seul fichier (Darwin Core Archive) vos données et métadonnées.
La Plateforme de Biodiversité vous guide dans la meilleure utilisation possible de l'IPT. Par son support technique, elle vous permet aussi l'installation d'IPT sur vos serveurs ou chez nous si vous le souhaitez.
Par exemple [BioFresh](http://data.freshwaterbiodiversity.eu/ipt/) et [AntaBIS](http://ipt.biodiversity.aq/) sont deux IPTs liés à des projets que nous hébergeons.

> Nous offrons de l'hébergement du heldpdesk et de l'assistance pour l'IPT ou d'autres outils de publications.

### Nettoyage et validation des données

Le nettoyage des données est l'une des étapes nécessaires à la manipulation des données sur la biodiversité qui vise à vérifier la qualité des données. Les outils utilisés dans le processus de nettoyage des données visent à détecter les erreurs d’omission, typographiques, de convention et de cohérence. À cet égard, nous recommandons ce qui suit :

- [Darwin Test](https://www.gbif.es/en/software/darwin-test/), un logiciel qui vérifie les données d'un fichier DarwinCore ou DarwinCoreArchive.

- Les SGBDR sont des logiciels qui vous aident à créer, gérer et utiliser une base de données relationnelle, qui est un ensemble de données réparties entre des tables spécifiques et formellement définies qui peuvent être interdépendantes. Il peut être considéré comme un ensemble de feuilles de calcul inter-référencées, dans lesquelles les données peuvent être facilement accessibles et réorganisées sans modifier leur structure initiale. Le langage standard utilisé pour manipuler les données au sein d'une base de données relationnelle est appelé Structured Query Language (SQL), et les relations utilisées pour relier les différents sous-ensembles d'éléments sur différentes tables sont appelées « clés ». Nous avons tendance à utiliser ces bases de données relationnelles et leurs systèmes de gestion open source disponibles gratuitement, tels que [PostgreSQL](https://www.postgresql.org/) et [SQLite](https://www.sqlite.org/) pour manipuler des ensembles de données, filtrer leur contenu et repérer les incohérences potentielles.

- [OpenRefine](http://openrefine.org/) est un outil gratuit et open source pour explorer et nettoyer le contenu d'ensembles de données impurs, ou pour modifier leur format. L'outil est puissant, bien documenté, facile à prendre en main et peut être étendu avec différentes extensions et services Web. Par exemple, OpenRefine peut vous aider à utiliser des expressions régulières ou des fonctions de clustering pour repérer les erreurs de syntaxe et d'encodage et pour lisser le contenu de votre table.
  Notez que des manuels de formation et des informations générales sur la qualité des données et les meilleures pratiques sont disponibles sur le [Centre de ressources en ligne du GBIF](https://docs.gbif.org/documentation-guidelines/en/#current-documents) et via le site Web du noeud espagnol. sur [qualité des données](https://www.gbif.es/en/formacion/).
- Le [validateur de données GBIF](https://www.gbif.org/tool/81281/gbif-data-validator) est un service qui permet à toute personne disposant d'un ensemble de données pertinent pour le GBIF de recevoir un rapport sur l'exactitude syntaxique et la validité du contenu de l'ensemble de données. En soumettant un ensemble de données au validateur, vous pouvez suivre les procédures de validation et d'interprétation généralement associées à la publication dans le GBIF et déterminer rapidement les problèmes potentiels dans les données - sans avoir à les publier.

> Nous offrons conseil et assistance pour le nettoyage et la validation de vos données.

### Registre GBIF

Cet outil permet aux utilisateurs de parcourir, rechercher et visualiser les objets dans le registre GBIF :

- Organisations : entités qui publient des ensembles de données et/ou gèrent des installations, par ex. _Musée d'histoire naturelle du Danemark_
- Ensembles de données : collections de données ou observations d'espèces, par ex. _Oiseaux tombés dans les phares danois de 1883 à 1939_
- Installations : serveurs lorsque des ensembles de données sont hébergés, par ex. _l'IPT du DanBIF à l'Université d'Aarhus_
- Collections : entités décrivant principalement des collections de musées, par ex. _Centre de recherche avancée sur la biodiversité de l'Université Hacettepe Genbank_
- Institutions : entités responsables des collections, par ex. Centre de recherche avancée sur la biodiversité de l'Université Hacettepe (BIOSPHERE)
- Personnel du GRSciColl : personnes associées aux institutions, par ex. _Selim Sualp Çağlar_
- Noeuds : entités représentant les participants au GBIF chargées d'approuver les éditeurs et de coordonner les activités dans un contexte géographique ou thématique, par ex. _DanBIF - Centre danois d'information sur la biodiversité_

> Avec le support du Secrétariat, nous vous aidons à maintenir les informations belges à jour.

### Global Registry of Scientific Collections (GRSciColl)

Le [Global Registry of Scientific Collections](https://scientific-collections.gbif.org),
est un référentiel complet d'informations organisé par la communauté sur les **collections scientifiques** qui prolonge le travail initialement commencé par le Consortium of the Barcode of Life (CBOL). En fournissant des informations sur les collections scientifiques physiques (leur contenu, leur emplacement, leurs contacts, les institutions associées, ainsi que les codes et identifiants des collections), GRSciColl offre une ressource destinée à un large éventail d'utilisations par les experts, les chercheurs et les membres de la société au sens large.

> Nous supportons la valorisation des institutions et des collections belges dans ce registre global, ainsi que le maintient à jour de leurs descriptions et ensembles de données associés.

### Les portails de données

Durant les 20 dernières années, nous avons développé une série de sites sur un variété de thématiques :

- [African Mammalia](https://projects.biodiversity.be/africanmammalia/)
- [Afromoths](https://www.afromoths.net/) Base de données en ligne sur les papillons de nuit d'Afrique tropicale
- [Belgian biodiversity data portal](http://data.biodiversity.be/) les données publiées au GBIF
- [Catalogue of the Lepidoptera of Belgium](https://projects.biodiversity.be/lepidoptera)
- [Freshwater Animal Diversity Assessment (FADA)](http://fada.biodiversity.be/) Liste d'espèces d'eaux douces
- [IFBL Data portal](https://projects.biodiversity.be/ifbl/pages/metadata) relevés historiques de La Flore Belge
- [RiparIAS](https://www.riparias.be/) - Reaching Integrated and Prompt Action in Response to Invasive Alien Species
- [TrIAS](http://trias-project.be) project

> Après étude de vos besoins, nous préparons, organisons, implémentons et hébergeons ces sites. Le contenu reste toujours dans les mains des experts scientifiques qui alimentent régulièrement ces sites en nouvelles données.
> L'ouverture et la qualité des données présentées est un élément déterminant.

### Utilisation des données

#### GBIF API

Le ['API du GBIF](https://techdocs.gbif.org/en/openapi/) fournit une alternative programmée à la publication et aux requêtes des données sur GBIF.org. Avec l'API GBIF vous pouvez rechercher des espèces, des occurrences, des jeux de données, des éditeurs de données, des articles...

#### RGBIF

[rgbif](https://techdocs.gbif.org/en/data-use/rgbif) est une interface pour l'environnement de programmation R offrant l'accès à l'API du GBIF.

#### PyGBIF

[pygbif](https://techdocs.gbif.org/en/data-use/pygbif) est une interface pour le langage Python offrant l'accès à l'API du GBIF

> Nous vous aidons à découvrir et à faire le meilleur usage de ces différents outils.

La [documentation technique du GBIF](https://techdocs.gbif.org/fr/) explique comment les utilisateurs peuvent accéder aux données du GBIF. Il fournit des informations sur les données disponibles, comment les récupérer, où elles ont été nettoyées ou vérifiées pour la qualité des données et comment elles doivent être citées.

### Outils Geographiques

Les outils géographiques nous permettent de personnaliser des cartes géographiques pour mettre en valeur les données sur la biodiversité. Par exemple, la carte du portail de données belge a été créée à partir d'une carte disponible gratuitement sur [OpenStreetMap](https://www.openstreetmap.org/). Nous recommandons aux scientifiques belges d’utiliser les outils géographiques suivants :

- Les systèmes d'information géographique (SIG) sont des systèmes conçus pour capturer, stocker, manipuler, analyser, gérer et visualiser tous types de données géographiquement référencées. Le principe de base des SIG est d'assembler différents ensembles de données spatialisées, qui peuvent être considérées comme différentes « couches de données », superposables et interopérables si elles utilisent le même système de coordonnées géographiques. Nous utilisons de préférence des SIG open source disponibles gratuitement tels que [QGIS](https://www.qgis.org), [DIVA-GIS](https://diva-gis.org/) ou [Carto](https://carto.com/) (SIG basé sur le cloud).

- Les extensions spatiales pour systèmes de gestion de bases de données permettent de spatialiser votre base de données et le traitement de son contenu géographique. Concrètement, des requêtes géographiques peuvent être opérées sur les données spatialisées au travers d'instructions SQL (Structured Query Language). Ces outils vous donnent la possibilité de traiter des caractéristiques spatiales au sein de votre base de données relationnelle, mais la rendent également interprétable pour un logiciel SIG qui peut être utilisé conjointement. Toutes les données publiées par la Plateforme Belge pour la Biodiversité sont stockées dans le système de gestion de données PostgreSQL avec extension spatiale PostGIS.

> Nous vous aidons a trouver la solution SIG qui vous convient le mieux

## Les standards

Les standards informatiques sur la biodiversité sont essentielles pour garantir l’interopérabilité entre les différents types de données fournies par différents éditeurs de données. Les standards permettent de comprendre une variété de données en utilisant un même « langage » commun afin que toutes les données puissent être intégrées, comprises et traitées par n’importe qui ou par n’importe quel processus automatisé sans ambiguïté. Les normes informatiques sur la biodiversité sont dans le domaine public afin que tout le monde puisse les utiliser.

Biodiversity Information Standards (alias [TDWG](https://www.tdwg.org/)) est la principale organisation qui crée des normes pour les données sur la biodiversité. La Plateforme Belge pour la Biodiversité participe activement au TDWG et utilise l'organisme de référence des standards du TDWG, appelé DarwinCore, pour une grande majorité des données sur la biodiversité.

### DarwinCore

[DarwinCore](https://rs.tdwg.org/dwc/) est un ensemble de normes informatiques sur la biodiversité développées par le TDWG. Il comprend un glossaire de termes destinés à faciliter le partage d'informations sur la diversité biologique. Voir par exemple les [termes DarwinCore décrivant l'apparition d'un organisme](https://rs.gbif.org/core/dwc_occurrence.xml). Étant donné que cette norme est utilisée par de nombreuses personnes, notamment le GBIF et l'[Encyclopedia of Life](https://eol.org) (EOL), n'importe qui peut facilement comprendre un ensemble de données observé dans n'importe quel pays par n'importe quel chercheur. La Plateforme Belge pour la Biodiversité vous aide à « cartographier » vos ensembles de données dans DarwinCore, une condition nécessaire pour les rendre téléchargeables et compréhensibles par tous sur GBIF.

### EML

L'EML est une norme de métadonnées. Les métadonnées sont la description d'un ensemble de données (des données sur vos données) et sont essentielles pour le rendre compréhensible par tous. Il aide les utilisateurs à savoir qui a créé le jeu de données, sa finalité, les méthodes d'échantillonnage utilisées, ses couvertures taxonomiques, géographiques et temporelles, etc. Le contexte de création d'un jeu de données est une information clé pour les utilisateurs potentiels qui souhaitent savoir s'il peut convenir à leur propre usage. EML suit un schéma XML, permettant d'inclure la structure et le contenu des métadonnées dans un seul fichier interprétable par la machine. L'interface IPT facilite l'édition des métadonnées et génère le fichier EML correspondant, qui sera joint aux données (sous un fichier texte au format DarwinCore) dans un dossier compressé et prêt à partager appelé « DarwinCore Archive ».

### Catalogue of Life

Le Catalogue of Life (COL) vise à soutenir la publication et la conservation de listes de contrôle et à fournir une plate-forme pour leur découverte, leur utilisation et leur citation cohérentes. Le GBIF maintient depuis un certain temps un index de liste de contrôle et soutient le réseau de référentiels permettant à sa communauté de partager les données des listes de contrôle. COL et GBIF ont uni leurs capacités pour faire de [ChecklistBank](https://www.checklistbank.org/) une base et un référentiel cohérents pour tous les ensembles de données COL et toute autre liste d'espèces sous licence ouverte, y compris celles mobilisées et enregistrées via le GBIF.

La communauté taxonomique publie des listes de contrôle sur ChecklistBank à l'aide de [ColDP](https://github.com/CatalogueOfLife/coldp/blob/master/README.md), DarwinCore ou ACEF.

### Frictionless Data

[Frictionless](https://frictionlessdata.io/) est une boîte à outils open source qui simplifie l'expérience des données, que vous soyez en train de gérer un CSV ou de concevoir des pipelines complexes.
[Camera Trap Data Package](https://camtrap-dp.tdwg.org/) (ou Camtrap DP en abrégé) est un format d'échange de données développé par la communauté pour les données de pièges photographiques. Il est basé sur les normes Frictionless.


### Le nouveau modèle de données
La communauté GBIF [diversifie son modèle de données](https://www.gbif.org/composition/HjlTr705BctcnaZkcjRJq/gbif-new-data-model) afin de dépasser les limitations actuellement imposées par le Darwin Core.

> Nous vous guidons vers les meilleurs standards de données en Biodiversité et vous informons des idées émergeantes vers un modèle unifié common offrant de nouvelles perspectives.

## Plan de gestion des données(DMP)

Dans le cadre d'efforts de collaboration avec le Belmont Forum et Biodiversa+, nous avons développé ce [Guide de gestion des données, un document d'orientation sur la gestion des données, les données ouvertes et la production de plans de gestion des données](https://www.biodiversa.eu/2023/10/06/discover-our-data-management-guide). Il s'agit d'un compagnon indispensable, conçu pour soutenir les chercheurs engagés dans des projets financés par le biais d'appels conjoints. Il vise à aider les chercheurs à créer et à mettre en œuvre efficacement leurs plans de gestion des données (Data Management Plan - DMP).

> Nous vous aidons à établir et à profiter un maximum de vos plans de gestion de données.
