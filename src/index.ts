import { fetchData } from "./api.ts";
import { writeToHTML } from "./html-output.ts";
import { processCountryData } from "./processing.ts";

const main = async (): Promise<void> => {
  // Fetch data from the REST Countries API endpoint
  const countries = await fetchData();

  //   Process the country data
  const processedCountries = processCountryData(countries);

  await writeToHTML(processedCountries);

  console.log(processedCountries);
};

main();
