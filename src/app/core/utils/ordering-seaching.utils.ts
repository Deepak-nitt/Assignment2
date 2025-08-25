import { PortfolioFormValue } from '../../features/portfolio/models/portfolio.model';

export function filterAndSortPortfolios(
  portfolios: PortfolioFormValue[],
  searchTerm: string
): PortfolioFormValue[] {
    // sorting the portfolios by name alphabetically, then by createdAt descending
  const sorted = [...portfolios].sort((a, b) => {
    const nameA = a.name.trim().toLowerCase();
    const nameB = b.name.trim().toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return b.createdAt - a.createdAt;
  });

  // if no search term, return sorted list

  if (!searchTerm.trim()) return sorted;

  // filtering based on name, skillsCsv, or projectTitle
  const term = searchTerm.trim().toLowerCase();
  return sorted.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.skillsCsv.toLowerCase().includes(term) ||
    p.projectTitle.toLowerCase().includes(term)
  );
}