import { CommonModule } from '@angular/common';
import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() readonly addClicked = new EventEmitter<void>();

  onAddClick(): void {
    this.addClicked.emit();
  }

}
