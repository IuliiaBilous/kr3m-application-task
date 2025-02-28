import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() placeholder: string = 'Search...';
  searchQuery: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(newValue: string) {
    this.searchQuery = newValue.trim();
    this.searchChange.emit(this.searchQuery);
  }
}
