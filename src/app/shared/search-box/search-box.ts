import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.html',
})
export class SearchBoxComponent {
    // Input properties for placeholder and value
  @Input() placeholder = 'Search...';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  // debounce timeout
  private searchTimeout: any;

  // Emit value change with debounce
  onInput(val: string) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.valueChange.emit(val);
    }, 300); // debounce 300ms
  }
}