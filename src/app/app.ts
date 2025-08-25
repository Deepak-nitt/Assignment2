import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './shared/header/header';
import { PortfolioFormComponent } from './features/portfolio/portfolio-form/portfolio-form';
import { Dashboard } from './features/dashboard/dashboard';
import { PortfolioFormValue } from './features/portfolio/models/portfolio.model';
import { PortfolioService } from './core/services/portfolio.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, PortfolioFormComponent, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly isFormVisible = signal<boolean>(false);
  readonly portfolios = signal<PortfolioFormValue[]>([]);

  // load portfolios from local storage on init
  constructor(private readonly portfolioService: PortfolioService) {
    this.portfolios.set(this.portfolioService.getPortfolios());
  }

  showForm():void {
    this.isFormVisible.set(true);
  }

  addPortfolio(portfolio: PortfolioFormValue):void {
    this.portfolioService.submitPortfolio(portfolio);
    this.portfolios.set(this.portfolioService.getPortfolios());
  }
}
