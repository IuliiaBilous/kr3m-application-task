import {Component} from '@angular/core';
import {ICompany} from "../../../core/models/company.model";
import {CompanyService} from "../../../core/services/company/company.service";
import {Router} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent {
  newCompany: ICompany = {
    id: 0,
    summary: '',
    email: '',
    phone: '',
    location: '',
    note: ''
  };

  formSubmitted = false;

  constructor(private _contactService: CompanyService, private _router: Router) {
  }

  addCompany(form: NgForm) {

    this.formSubmitted = true;

    if (form.valid) {
      this._contactService.addCompany(this.newCompany);
      this.formSubmitted = false;
      this._router.navigate(['/companies']);
    }
  }
}
