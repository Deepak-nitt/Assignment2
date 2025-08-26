// creating a model for the portfolio form value

export interface PortfolioFormValue {
  // readonly is for preventing accidental modification
  readonly name: string;
  readonly skillsCsv: string;
  readonly projectTitle: string;
  readonly projectDescription: string;
  readonly createdAt: number; // timestamp for the sorting purpose
}


