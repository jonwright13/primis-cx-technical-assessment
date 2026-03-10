import { fetchData } from "./api.ts";
import { writeToCSV } from "./csv-output.ts";
import { writeToHTML } from "./html-output.ts";
import { processCountryData } from "./processing.ts";

/**
 * Handles all steps of the script to fetch country data from the endpoint, process the countries into a meaning format, and then exports the data to CSV and HTML before exiting
 * @return void
 */
const main = async (): Promise<void> => {
  // Fetch data from the REST Countries API endpoint
  const countries = await fetchData();

  if (!countries.length) {
    console.error("Countries array is empty");
    process.exit(1);
  }

  //   Process the country data
  const processedCountries = processCountryData(countries);

  try {
    //   Generate HTML and write to output file
    await writeToHTML(processedCountries);

    //   Write to CSV
    await writeToCSV(processedCountries);

    console.log(
      `Fetched ${processedCountries.length} countries. Files written to /output`,
    );
    process.exit(0);
  } catch (e) {
    console.error("Error exporting data", e);
    process.exit(1);
  }
};

main();
