import type { Country, ProcessedCountry } from "./types";

const NA = "N/A";

const getCapital = (capital: Country["capital"]): string => {
  if (!capital) return NA;
  return capital[0] ?? NA;
};

// AI-Generated
const formatPopulation = (population: Country["population"]): string => {
  return population.toLocaleString("en-GB");
};

const formatLanguagues = (languages: Country["languages"]): string => {
  return Object.values(languages).join(", ");
};

const formatCurrency = (currencies: Country["currencies"]): string => {
  if (!currencies) return NA;
  const first = Object.values(currencies)[0];
  if (!first) return NA;
  //   Capitalise the first letter of the currency
  const name = first.name.charAt(0).toUpperCase() + first.name.slice(1);
  return `${name} (${first.symbol})`;
};

const formatFlag = (flags: Country["flags"]): string => {
  // AI-Generated
  return `<img src="${flags.png}" alt="flag" width="32" />`;
};

const mapCountry = (country: Country): ProcessedCountry => {
  const { name, capital, population, languages, currencies, flags } = country;

  return {
    name: name.common,
    capital: getCapital(capital),
    population: formatPopulation(population),
    languages: formatLanguagues(languages),
    currency: formatCurrency(currencies),
    flag: formatFlag(flags),
  };
};

export const processCountryData = (countries: Country[]) => {
  return countries.map(mapCountry).sort((a, b) => a.name.localeCompare(b.name));
};
