var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = "BE";

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: "light",
    extendWith: {
      primary: primaryColor,
      borderRadius: isSquared ? 0 : 3,
    },
  });
}

var siteConfig = {
  version: 2,
  availableCatalogues: ["OCCURRENCE", "DATASET", "PUBLISHER", "LITERATURE"],
  routes: {
    enabledRoutes: [
      "occurrenceSearch",
      "publisherSearch",
      "publisherKey",
      "datasetKey",
      "datasetSearch",
      "literatureSearch",
      "collectionSearch",
    ],
    alwaysUseHrefs: true,
  },
  occurrence: {
    mapSettings: {
      lat: 50.6,
      lng: 4.3,
      zoom: 8.4,
    },
    rootPredicate: {
      type: "and",
      predicates: [
        {
          // it is possible to include records published from Belgium
          key: "notIssues",
          type: "equals",
          value: "COUNTRY_COORDINATE_MISMATCH",
        },
        {
          type: "or",
          predicates: [
            {
              key: "country",
              type: "equals",
              value: countryCode,
            },
            {
              // exclude records that have coordinate issues
              key: "publishingCountry",
              type: "equals",
              value: countryCode,
            },
          ],
        },
      ],
    },
    highlightedFilters: [
      "taxonKey",
      "gadmGid",
      "stateProvince",
      "publisherKey",
      "elevation",
      "year",
      "basisOfRecord",
      "datasetName",
      "occurrenceIssue",
    ],
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  dataset: {
    rootFilter: { publishingCountry: countryCode },
    highlightedFilters: ["q", "anyPublisherKey", "datasetType", "license"],
    excludedFilters: ["publishingCountryCode"],
  },
  publisher: {
    rootFilter: { country: countryCode },
    excludedFilters: ["countrySingle", "networkKey"],
  },
  collection: {
    excludedFilters: ["countryGrSciColl"],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
      active: true,
    },
  },
  institution: {
    excludedFilters: ["countryGrSciColl"],
    rootFilter: {
      displayOnNHCPortal: true,
      country: countryCode,
      active: true,
    },
    mapSettings: {
      enabled: true,
      lat: 50.6,
      lng: 4.3,
      zoom: 8.4,
    },
  },
  literature: {
    rootFilter: {
      predicate: {
        type: "or",
        predicates: [
          {
            type: "in",
            key: "countriesOfResearcher",
            values: [countryCode],
          },
          {
            type: "in",
            key: "countriesOfCoverage",
            values: [countryCode],
          },
        ],
      },
    },
    highlightedFilters: [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year",
    ],
  },
  maps: {
    locale: "fr",
  },
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
