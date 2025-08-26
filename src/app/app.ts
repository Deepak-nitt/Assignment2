import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { CommonModule } from '@angular/common';
import { PortfolioFormComponent } from './features/portfolio/portfolio-form/portfolio-form';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Header,PortfolioFormComponent],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
  