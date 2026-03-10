import { writeFile, mkdir } from "fs/promises";

import type { ProcessedCountry } from "./types";

/**
 * Escapes a CSV field by wrapping in double quotes if it contains a comma. (AI-generated)
 * @param field - The field value to escape
 * @returns Escaped field string
 */
const escapeField = (field: string): string => {
  // AI-generated
  return field.includes(",") ? `"${field}"` : field;
};

/**
 * Converts a processed country object to a CSV row string. (AI-generated)
 * @param country - Processed country object
 * @returns CSV row string
 */
const toCSVRows = (country: ProcessedCountry): string => {
  const { name, capital, population, languages, currency } = country;
  return [name, capital, population, languages, currency]
    .map(escapeField)
    .join(",");
};

/**
 * Writes the processed country data to output/countries.csv. (AI-generated)
 * Creates the output directory if it does not exist.
 * @param countries - Array of processed country objects
 */
export const writeToCSV = async (
  countries: ProcessedCountry[],
): Promise<void> => {
  const first = countries[0];
  if (!first) {
    console.error("Countries array is empty");
    process.exit(1);
  }

  const header = Object.keys(first).filter((k) => k !== "flag");
  const rows = countries.map(toCSVRows).join("\n");

  const csv = `${header}\n${rows}`;

  await mkdir("output", { recursive: true });

  await writeFile("output/countries.csv", csv, "utf-8");
};
