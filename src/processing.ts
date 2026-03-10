import type { Country, ProcessedCountry } from "./types";

const NA = "N/A";

/**
 * Returns the first capital city of a country (AI-Generated)
 * @params capital - Array of capital city names from the API
 * @return The first capital city or "N/A" if not available
 */
const getCapital = (capital: Country["capital"]): string => {
  if (!capital) return NA;
  return capital[0] ?? NA;
};

/**
 * Formats a population number with commas. (AI-Generated)
 * @param population - Raw population number from the API
 * @returns Formatted population string (e.g. "1,234,567")
 */
const formatPopulation = (population: Country["population"]): string => {
  // AI-Generated
  return population.toLocaleString("en-GB");
};

/**
 * Joins all language values into a comma-separated string. (AI-Generated)
 * @param languages - Object of language key/value pairs from the API
 * @returns Comma-separated list of languages or "N/A" if not available
 */
const formatLanguagues = (languages: Country["languages"]): string => {
  if (!languages) return NA;
  return Object.values(languages).join(", ");
};

/**
 * Returns the name and symbol of the first currency. (AI-Generated)
 * @param currencies - Object of currency objects from the API
 * @returns Formatted currency string (e.g. "Euro (€)") or "N/A" if not available
 */
const formatCurrency = (currencies: Country["currencies"]): string => {
  if (!currencies) return NA;
  const first = Object.values(currencies)[0];
  if (!first) return NA;
  //   Capitalise the first letter of the currency
  const name = first.name.charAt(0).toUpperCase() + first.name.slice(1);
  return `${name} (${first.symbol})`;
};

/**
 * Returns an HTML img tag for the country flag. (AI-Generated)
 * @param flags - Flags object from the API
 * @returns HTML img tag string with the flag image
 */
const formatFlag = (flags: Country["flags"]): string => {
  // AI-Generated
  return `<img src="${flags.png}" alt="flag" width="32" />`;
};

/**
 * Maps a raw Country object to a ProcessedCountry object. (AI-Generated)
 * @param country - Raw country object from the API
 * @returns Processed country object with formatted fields
 */
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

/**
 * Processes and sorts an array of countries alphabetically by name. (AI-Generated)
 * @param countries - Array of raw country objects from the API
 * @returns Sorted array of processed country objects
 */
export const processCountryData = (
  countries: Country[],
): ProcessedCountry[] => {
  return countries.map(mapCountry).sort((a, b) => a.name.localeCompare(b.name));
};
