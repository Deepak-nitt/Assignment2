import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Header],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isformVisible = signal(false);
}
