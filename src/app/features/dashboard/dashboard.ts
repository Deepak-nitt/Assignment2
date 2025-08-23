import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFormValue } from '../portfolio/models/portfolio.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  @Input() portfolios: PortfolioFormValue[] = [];
  // getter for sorted portfolios by createdAt descending
  get sortedPortfolios(): PortfolioFormValue[] {
    return [...this.portfolios].sort((a, b) => {
      const nameA = a.name.trim().toLowerCase();
      const nameB = b.name.trim().toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      // If names are equal, sort by createdAt DESC (newest first)
      return b.createdAt - a.createdAt;
    });
  }
}
