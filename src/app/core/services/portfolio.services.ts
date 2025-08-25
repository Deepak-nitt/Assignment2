import { Injectable } from '@angular/core';
import { PortfolioFormValue } from '../../features/portfolio/models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly storageKey = 'Deepak2';
  constructor() {}


// get all portfolios from local storage
  getPortfolios(): PortfolioFormValue[] {
    // safe parsing with try-catch
    try{
      const data = localStorage.getItem(this.storageKey);
      // if data is null, return empty array
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving portfolios from localStorage:', error);
      return [];
    }
  }

  // add a new portfolio to local storage
  submitPortfolio(portfolio: PortfolioFormValue): void {
    // Retrieve existing portfolios
    const portfolios = this.getPortfolios();
    const newPortfolios = [...portfolios, portfolio];
    try{
      localStorage.setItem(this.storageKey, JSON.stringify(newPortfolios));
      console.log('Portfolio saved to localStorage:', portfolio);
    } catch (error) {
      console.error('Error saving portfolio to localStorage:', error);
    }
  }
}
