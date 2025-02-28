import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {IContact} from "../../models/contact.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contacts: IContact[] = [];

  constructor(private _httpClient: HttpClient) {
  }

  public getAllContacts(): Observable<IContact[]> {
    if (this._contacts.length > 0) {
      return of(this._contacts);
    } else {
      return this._httpClient.get<IContact[]>('/assets/contacts.json').pipe(
        map(data => this._contacts = data)
      );
    }
  }

  public addContact(contact: IContact): void {
    contact.id = this._contacts.length + 1;
    this._contacts.push(contact);
  }

  public deleteContact(id: number): IContact[] {
    this._contacts = this._contacts.filter(contact => contact.id !== id);
    return this._contacts;
  }
}
