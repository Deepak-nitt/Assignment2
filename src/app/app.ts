import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './shared/header/header';
import { PortfolioFormComponent } from './features/portfolio/portfolio-form/portfolio-form';
import { Dashboard } from './features/dashboard/dashboard';
import { PortfolioFormValue } from './features/portfolio/models/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, PortfolioFormComponent, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isFormVisible = signal(false);
  portfolios = signal<PortfolioFormValue[]>([]);

  showForm() {
    this.isFormVisible.set(true);
  }

  addPortfolio(portfolio: PortfolioFormValue) {
    this.portfolios.update(list => [...list, portfolio]);
  }
}
