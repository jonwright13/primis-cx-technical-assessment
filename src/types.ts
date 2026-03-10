// AI-generated
export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  population: number;
  languages: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  subregion?: string;
}

export interface ProcessedCountry {
  name: string;
  capital: string;
  population: string;
  languages: string;
  currency: string;
  flag: string;
}
