import type { Country } from "./types";

const BASE_URL = "https://restcountries.com/v3.1";
const ENDPOINT = "/region/europe";

/**
 * Fetches all European countries from the REST Countries API
 * @returns  Array of raw country objects from the API
 *
 */
export const fetchData = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`);

    // Handle non-200 errors and exit
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status} ${response.statusText}`);
      process.exit(1);
    }

    const countries = (await response.json()) as Country[];

    return countries;
  } catch (e) {
    // AI generated
    const message = e instanceof Error ? e.message : String(e);
    console.error(`Error fetching data: ${message}`);
    process.exit(1);
  }
};
