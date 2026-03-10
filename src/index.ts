import { fetchData } from "./api.ts";
import { writeToCSV } from "./csv-output.ts";
import { writeToHTML } from "./html-output.ts";
import { processCountryData } from "./processing.ts";

const main = async (): Promise<void> => {
  // Fetch data from the REST Countries API endpoint
  const countries = await fetchData();

  if (!countries.length) {
    console.error("Countries array is empty");
    process.exit(1);
  }

  //   Process the country data
  const processedCountries = processCountryData(countries);

  //   Generate HTML and write to output file
  await writeToHTML(processedCountries);

  await writeToCSV(processedCountries);

  console.log(processedCountries);
};

main();
