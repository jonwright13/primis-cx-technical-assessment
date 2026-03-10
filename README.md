# Node.js Technical Assessment

This is a Node.js command-line script to fetch country data from the [REST Countries API](https://restcountries.com), process it, and generate CSV and HTML output files.

## Process

1. Fetch all European countries from the REST Countries API
2. Process and transform the data
3. Write `output/countries.html` and `output/countries.csv`
4. Print a summary to the console

## Requirements

- Node.js 20 LTS or above

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Script

```bash
node index.js
```

## Output

Both files are written to the '/output' directory, which is created automatically if it doesn't exist.

<!-- AI-Generated -->

| File             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `countries.html` | Styled HTML table with flag images and a generated timestamp |
| `countries.csv`  | CSV of the same data excluding flag images                   |
