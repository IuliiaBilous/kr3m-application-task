import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../shared/abstract-list/abstract-list.component";
import {IContact} from "../../../core/models/contact.model";
import {ContactService} from "../../../core/services/contact/contact.service";

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    AbstractListComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  tableColumns = [
    {label: 'User name', field: 'user'},
    {label: 'E-mail', field: 'email'},
    {label: 'Company', field: 'company'},
    {label: 'Code', field: 'code'},
    {label: 'Note', field: 'note'}
  ] as { label: string; field: keyof IContact }[];

  allContacts: IContact[] = [];
  currentPage: number = 1;
  searchText: string = '';

  constructor(private _contactService: ContactService) {
    this._contactService.getAllContacts().subscribe((data) => {
      this.allContacts = data;
    });
  }

  onDeleteContact(contact: IContact) {
    this._contactService.deleteContact(contact.id ? contact.id : -1);
    this.allContacts = this.allContacts.filter((c) => c.id !== contact.id);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onSearchChange(value: string) {
    this.searchText = value;
  }
}
