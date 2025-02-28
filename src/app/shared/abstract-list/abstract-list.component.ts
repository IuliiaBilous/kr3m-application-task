import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PaginationComponent} from "../pagination/pagination.component";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-abstract-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    PaginationComponent,
    SearchComponent,
    NgIf
  ],
  templateUrl: './abstract-list.component.html',
  styleUrl: './abstract-list.component.scss'
})
export class AbstractListComponent<T extends object> {

  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() addButtonLabel!: string;
  @Input() addButtonLink!: string;
  @Input() availableColumns: { label: string; field: keyof T }[] = [];
  @Input() data: T[] = [];
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;

  @Output() deleteItem = new EventEmitter<T>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() searchChange = new EventEmitter<string>();

  searchText: string = '';
  selectedColumns: { label: string; field: keyof T }[] = [];

  ngOnInit(): void {
    this.selectedColumns = [...this.availableColumns];
  }

  onDelete(item: T): void {
    this.deleteItem.emit(item);
  }

  getPaginatedData(): T[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onSearch(value: string): void {
    this.searchText = value;
    this.searchChange.emit(value);
  }

  get filteredData(): T[] {
    return this.data.filter(item => this.applyFilter(item));
  }

  applyFilter(item: T): boolean {
    const searchLowerCase = this.searchText.toLowerCase();
    const fieldsToSearch = Object.keys(item) as (keyof T)[];

    return fieldsToSearch.some(field => {
      const fieldValue = item[field];
      return fieldValue && String(fieldValue).toLowerCase().includes(searchLowerCase);
    });
  }

  isColumnSelected(column: { label: string; field: keyof T }): boolean {
    return this.selectedColumns.some(selected => selected.field === column.field);
  }

  toggleColumn(column: { label: string; field: keyof T }): void {
    if (this.isColumnSelected(column)) {
      this.selectedColumns = this.selectedColumns.filter(c => c.field !== column.field);
    } else {
      this.selectedColumns.push(column);
    }
  }
}
