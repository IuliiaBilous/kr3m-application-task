import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../shared/abstract-list/abstract-list.component";
import {CompanyService} from "../../../core/services/company/company.service";
import {ICompany} from "../../../core/models/company.model";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    AbstractListComponent
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  tableColumns = [
    {label: 'Summary', field: 'summary'},
    {label: 'E-mail', field: 'email'},
    {label: 'Phone', field: 'phone'},
    {label: 'Location', field: 'location'},
    {label: 'Note', field: 'note'}
  ] as { label: string; field: keyof ICompany }[];

  allCompanies: ICompany[] = [];
  currentPage: number = 1;
  searchText: string = '';

  constructor(private _companyService: CompanyService) {
    this._companyService.getAllCompanies().subscribe(data => {
      this.allCompanies = data;
    });
  }

  onDeleteCompany(company: ICompany) {
    this._companyService.deleteCompany(company.id ? company.id : -1);
    this.allCompanies = this.allCompanies.filter((c) => c.id !== company.id);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onSearchChange(value: string) {
    this.searchText = value;
  }
}
