import { writeFile, mkdir } from "fs/promises";

import type { ProcessedCountry } from "./types";

const generateRow = (country: ProcessedCountry, index: number): string => {
  // AI-generated
  return `
    <tr class="${index % 2 === 0 ? "even" : "odd"}">
      <td>${country.flag}</td>
      <td>${country.name}</td>
      <td>${country.capital}</td>
      <td>${country.population}</td>
      <td>${country.languages}</td>
      <td>${country.currency}</td>
    </tr>`;
};

const generateRows = (countries: ProcessedCountry[]): string => {
  return countries.map(generateRow).join("");
};

const generateHTML = (countries: ProcessedCountry[]): string => {
  const timestamp = new Date().toLocaleString("en-GB");

  // AI-generated
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>European Countries</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Georgia, serif;
      background: #f4f1ec;
      color: #1a1a1a;
      padding: 2rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0.25rem;
      letter-spacing: -0.5px;
    }

    .timestamp {
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    }

    thead tr {
      background: #1a1a1a;
      color: #fff;
    }

    th {
      padding: 0.75rem 1rem;
      text-align: left;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    td {
      padding: 0.65rem 1rem;
      font-size: 0.9rem;
      border-bottom: 1px solid #eee;
    }

    tbody tr.odd { background: #fafafa; }
    tbody tr.even { background: #fff; }
    tbody tr:hover { background: #f0ede8; }
  </style>
</head>
<body>
  <h1>European Countries</h1>
  <p class="timestamp">Generated: ${timestamp}</p>
  <table>
    <thead>
      <tr>
        <th>Flag</th>
        <th>Country</th>
        <th>Capital</th>
        <th>Population</th>
        <th>Languages</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      ${generateRows(countries)}
    </tbody>
  </table>
</body>
</html>`;
};

export const writeToHTML = async (
  countries: ProcessedCountry[],
): Promise<void> => {
  const html = generateHTML(countries);

  //   Generate an output directory if one doesn't exist
  await mkdir("output", { recursive: true });

  //   Write to the html file
  await writeFile("output/countries.html", html, "utf-8");
};
