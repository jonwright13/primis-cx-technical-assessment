import { fetchData } from "./api.ts";
import { processCountryData } from "./processing.ts";

const main = async (): Promise<void> => {
  // Fetch data from the REST Countries API endpoint
  const countries = await fetchData();

  //   Process the country data
  const processed = processCountryData(countries);

  console.log(processed);
};

main();
