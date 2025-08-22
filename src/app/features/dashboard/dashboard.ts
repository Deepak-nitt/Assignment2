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
}
