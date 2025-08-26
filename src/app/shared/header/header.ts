import { CommonModule } from '@angular/common';
import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() addClicked = new EventEmitter<void>();

  onAddClick(){
    this.addClicked.emit();
  }

}
