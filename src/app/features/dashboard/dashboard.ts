import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFormValue } from '../portfolio/models/portfolio.model';
import { SearchBoxComponent } from '../../shared/search-box/search-box';
import { filterAndSortPortfolios } from '../../core/utils/ordering-seaching.utils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  @Input() portfolios: PortfolioFormValue[] = [];
  @Output() addClicked = new EventEmitter<void>();
  searchTerm = '';

  onSearchChange(value: string) {
    this.searchTerm = value;
  }
  onAddClick(){
    this.addClicked.emit();
  }


  get filteredPortfolios(): PortfolioFormValue[] {
    return filterAndSortPortfolios(this.portfolios, this.searchTerm);
  }
}
