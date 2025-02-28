import {Injectable} from '@angular/core';
import {ICompany} from "../../models/company.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _companies: ICompany[] = [];

  constructor(private _httpClient: HttpClient) {
  }

  public getAllCompanies(): Observable<ICompany[]> {
    if (this._companies.length > 0) {
      return of(this._companies);
    } else {
      return this._httpClient.get<ICompany[]>('/assets/companies.json').pipe(
        map(data => this._companies = data)
      );
    }
  }

  public addCompany(company: ICompany): void {
    this._companies.push(company);
  }

  public deleteCompany(id: number): ICompany[] {
    this._companies = this._companies.filter(company => company.id !== id);
    return this._companies;
  }
}
