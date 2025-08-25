import { Injectable } from '@angular/core';
import { PortfolioFormValue } from '../../features/portfolio/models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  /** Submit Portfolio (API call can be added later) */
  submitPortfolio(formValue: PortfolioFormValue): void {
    console.log('Portfolio Submitted via Service:', formValue);
  }
}
