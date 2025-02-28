import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 8;
  @Output() pageChange = new EventEmitter<number>();

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getDisplayedPages(): (number | null)[] {
    const totalPages = this.getTotalPages();
    if (totalPages <= 7) {
      return Array.from({length: totalPages}, (_, i) => i + 1);
    }

    const pages: (number | null)[] = [1];

    if (this.currentPage > 3) {
      pages.push(null);
    }

    const start = Math.max(2, this.currentPage - 1);
    const end = Math.min(totalPages - 1, this.currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (this.currentPage < totalPages - 2) {
      pages.push(null);
    }

    pages.push(totalPages);
    return pages;
  }

  goToPage(page: number | null) {
    if (page !== null) {
      this.pageChange.emit(page);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
