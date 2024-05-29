---
lang-ref: services
title: Our Services
description: Node offer a variety of services
background: "{{ site.data.images.Lycaena_tityrus.src }}"
imageLicense: "{{ site.data.images.Lycaena_tityrus.caption }}"
height: 70vh
permalink: /services
---

We offer a variety of services related to **Biodiversity Informatics Tools and Standards** to the Belgian BIF community. Whether you want to publish data or use data from GBIF our infrastructre and experts are there to help you.

## Tools

### Integrated Publishing Tool

The [Integrated Publishing Toolkit](http://ipt.biodiversity.be/) (IPT) is a publishing tool developed by GBIF that is used to publish biodiversity data into the GBIF network. It supports different data input formats (Databases, Excel, CSV text files) and helps to translate your structure in order to match the **Darwin Core** standards(see below). The IPT also allows to edit the metadata, describing the dataset, and to merge the content and it’s description under a single file called Darwin Core archive. The Belgian Biodiversity Platform shares informations on IPTs, their added-value and how it works to any interested parties. We also provide technical support for the installation of IPTs and we can also host IPTs. For instance, we currently host [BioFresh](http://data.freshwaterbiodiversity.eu/ipt/) and [AntaBIS](http://ipt.biodiversity.aq/) IPTs.

> We offer you hosting, heldpdesk and assistance with IPT or other publication tools.

### Data cleaning and validating

Data cleaning is one of the steps required in the manipulation of biodiversity data that aims to check data quality. Tools used in the data cleaning process aim to detect omission, typographic, convention and coherence errors. In this regard, we recommend the following:

- [Darwin Test](https://www.gbif.es/en/software/darwin-test/), a software application that checks and validates records from tables in a DarwinCore or DarwinCore Archive format.

- RDBMS are softwares that help you to build, manage and use a relational database, which is a set of data distributed among specific and formally defined tables which can be interrelated. It can be considered as a set of inter-referenced spreadsheets, in which the data can be easily accessed and reorganised without changing its initial structure. The standard language used to manipulate data within a relational database is called Structured Query Language (SQL), and the relations used to link the differents subsets of elements over different tables are called ‘keys’. We tend to make use of these relational databases and their freely available open source management systems, such as [PostgreSQL](https://www.postgresql.org/) and [SQLite](https://www.sqlite.org/) to manipulate datasets, screen their contents and spot potential inconsistencies.

- [OpenRefine](http://openrefine.org/) is a free and open source tool to explore and clean the content of unclean datasets, or to change its format. The tool is powerful, well-documented, easy to handle, and can be extended with different extensions and web services. For example, OpenRefine can help you to use regular expressions or clustering functions to spot syntax and encoding errors, and to smooth your table contents.
  Note that training manuals and background information on data quality and best practices are available on [GBIF Online Resource Center](https://docs.gbif.org/documentation-guidelines/en/#current-documents) and through the Spanish node website on [data quality](https://www.gbif.es/en/formacion/).
- The [GBIF data validator](https://www.gbif.org/tool/81281/gbif-data-validator) is a service that allows anyone with a GBIF-relevant dataset to receive a report on the syntactical correctness and the validity of the content contained within the dataset. By submitting a dataset to the validator, you can go through the validation and interpretation procedures usually associated with publishing in GBIF and quickly determine potential issues in data - without having to publish it.

> We offer you assistance in Data cleaning and validation.

### GBIF registry

This tool allows users the ability to browse, search and view objects in the GBIF registry:

- Organizations: entities who publish datasets and/or manage installations , e.g. Natural History Museum of Denmark
- Datasets: collections of data, e.g. species occurrences, e.g. Birds fallen at Danish Lighthouses 1883 through 1939
- Installations: servers when datasets are hosted, e.g. DanBIF IPT at Aarhus University
- Collections: entities describing mainly museum collections, e.g. Hacettepe University Biodiversity Advanced Research Center Genbank
- Institutions: entities responsible for collections , e.g. Hacettepe University Biodiversity Advanced Research Center (BIOSPHERE)
- GRSciColl Staff: people associated with institutions, e.g. Selim Sualp Çağlar
- Nodes: entities representing GBIF participants responsible for endorsing publishers and coordinating activities in a geographic or thematic context, e.g. DanBIF - Danish Biodiversity Information Facility

> With GBIF Secretariat, we maintain the Belgian entries of GBIF Registry.

### Global Registry of Scientific Collections (GRSciColl)

The [Global Registry of Scientific Collections](https://scientific-collections.gbif.org), or GRSciColl, is a comprehensive, community-curated repository of information about scientific collections that extends work initially started by the Consortium of the Barcode of Life (CBOL). By providing information about physical scientific collections—their content, location, contacts, associated institutions, and collection codes and identifiers—GRSciColl offers a resource for a wide range of uses by experts, researchers and members of broader society.

> We support the curation of the Belgian institutions and collections metadata.

### Dedicated Data Portals

Over the last 20 years, we developped a variety of websites:

- [African Mammalia](https://projects.biodiversity.be/africanmammalia/)
- [Afromoths](https://www.afromoths.net/) Online database of Afrotropical moth species
- [Belgian biodiversity data portal](http://data.biodiversity.be/) Data published by Belgium
- [Catalogue of the Lepidoptera of Belgium](https://projects.biodiversity.be/lepidoptera)
- [Freshwater Animal Diversity Assessment (FADA)](http://fada.biodiversity.be/)
- [IFBL Data portal](https://projects.biodiversity.be/ifbl/pages/metadata) - Explore Flora Checklists of Belgium
- [RiparIAS](https://www.riparias.be/) - Reaching Integrated and Prompt Action in Response to Invasive Alien Species
- [TrIAS](http://trias-project.be) project

> We design, database, implement and host these websites. The content is always provided and scrutinized by scientific experts.

### Data Use tools

#### GBIF API

The [GBIF API](https://techdocs.gbif.org/en/openapi/) provides a programmatic way to query and publish data on GBIF.org. With GBIF RESTful API you can query Species, Occurrences, Datasets, Publishers, Networks, Literature, Vocabulary...

#### RGBIF

[rgbif](https://techdocs.gbif.org/en/data-use/rgbif) is an interface to the GBIF API for the R statistical programming environment.

#### PyGBIF

[pygbif](https://techdocs.gbif.org/en/data-use/pygbif) is an interface to the GBIF API for the Python programming language.

> We help you to discover and make use of these tools.

The [GBIF technical documentation](https://techdocs.gbif.org/en/) describes how users can access data from GBIF. It provides information on the available data, how to retrieve it, where it has been cleaned or checked for data quality, and how it should be cited.

### Geographic tools

Geographic tools allow us to customise geographic maps to showcase biodiversity data. For instance, the map of the Belgian Data Portal was created by using a map freely available on [OpenStreetMap](http://www.openstreetmap.org/). We recommend Belgian scientists to make use of the following geographic tools:

- Geographic Information System (GIS), are systems designed to capture, store, manipulate, analyse, manage, and visualise all types of geographically referenced data. GIS basic principle is to assemble different sets of spatialized data, which can be considered as different 'data layers', that are superposable and interoperable if they use the same geographic coordinate system. We preferably use freely available open source GIS such as [QGIS](http://www.qgis.org), [DIVA-GIS](http://www.diva-gis.org) or [Carto](https://carto.com/) (cloud-based GIS).

- Spatial extensions for database management systems allow to spatialize your database and the processing of its geographic content. Concretely, geographic queries can be operated on the spatialized data through SQL (Structured Query Language) statements. These tools give you the possibility to deal with spatial features within your relational database, but also make it interpretable for a GIS software which can be used in conjunction. All data published by the Belgian Biodiversity Platform are stored in PostgreSQL data management system with PostGIS spatial extension.

> We help you to find the most appropriate GIS solution.

## Standards

Biodiversity Informatics standards are essential to ensure interoperability between different types of data provided by different data publishers. Standards allow a variety of data to be understood by using a same common ‘language’ so that all data can be integrated, understood and processed by anyone or any automated process without ambiguity. Biodiversity Informatics standards are in the public domain so that anyone can use them.

Biodiversity Informatics( aka as [TDWG](http://www.tdwg.org/)) is the main organisation that creates standards for biodiversity data. The Belgian Biodiversity Platform is actively participating in TDWG and uses the TDWG standards reference body, called DarwinCore, for a vast majority of biodiversity data.

### DarwinCore

[DarwinCore](http://rs.tdwg.org/dwc/) is a body of Biodiversity Informatics standards developed by the TDWG. It includes a glossary of terms intended to facilitate the sharing of information about biological diversity. See for exemple the [DarwinCore terms describing the occurrence of an organism](http://rs.gbif.org/core/dwc_occurrence.xml). Because this standard is used by many, including GBIF and the [Encyclopedia of Life](https://eol.org) (EOL), anyone can easily understand a dataset observed in any country by any researcher. The Belgian Biodiversity Platform helps you to ‘map’ your datasets into DarwinCore, a requirement to make it uploadable and understandable by all on GBIF.

### EML

The EML is a metadata standard. Metadata are the description of a dataset (data about your data) and are essential to make it understandable by anyone. It helps the users to know who created the dataset, its purpose, the sampling methods used, its taxonomical, geographical and temporal coverages, etc. The context of the creation of a dataset is a key information for potential users that want to know if it can be suitable for their own use. EML follows an XML scheme, allowing to include the structure and the content of the metadata into a single machine-interpretable file. The IPT interface facilitates edition of metadata and generates the corresponding EML file, that will be joined to the data (under a DarwinCore-formated text file) into a compressed and ready to share folder called ‘DarwinCore Archive”.

### Catalogue of Life

The Catalogue of Life (COL) aims to support the publication and curation of checklists and to provide a platform for their consistent discovery, use and citation. GBIF has for some time maintained a checklist index and supported the network of repositories for its community to share checklist data. COL and GBIF have united their capabilities to make [ChecklistBank](https://www.checklistbank.org/) a consistent foundation and repository for all COL datasets and any other openly licensed species lists, inluding those mobilized and registered through GBIF.

The taxonomic community publish checklists to ChecklistBank using [ColDP](https://github.com/CatalogueOfLife/coldp/blob/master/README.md), DarwinCore or ACEF file.

### Frictionless Data

[Frictionless](https://frictionlessdata.io/) is an open-source toolkit that brings simplicity to the data experience - whether you're wrangling a CSV or engineering complex pipelines.
[Camera Trap Data Package](https://camtrap-dp.tdwg.org/) (or Camtrap DP for short) is a community developed data exchange format for camera trap data. It is based on Frictionless standards.

> We guide you through the various Biodiversity Standards.

## Data Management Plan

In collaborative efforts with The Belmont Forum and Biodiversa+, we developped this [Data Management Guide,a guidance document on data management, open data and the production of data management plans](https://www.biodiversa.eu/2023/10/06/discover-our-data-management-guide/).
It is an indispensable companion, tailored to support researchers who are engaged in funded projects through joint calls. It aims to help researchers creating and implementing Data Management Plans (DMPs) effectively.

> We help you taking full advantages of your DMPs
