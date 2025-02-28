import {Routes} from '@angular/router';
import {ContactListComponent} from "./features/contacts/contact-list/contact-list.component";
import {CompanyListComponent} from "./features/companies/company-list/company-list.component";
import {AddContactComponent} from "./features/contacts/add-contact/add-contact.component";
import {AddCompanyComponent} from "./features/companies/add-company/add-company.component";

export const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'add-company',
    component: AddCompanyComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];
