import {Component} from '@angular/core';
import {IContact} from "../../../core/models/contact.model";
import {ContactService} from "../../../core/services/contact/contact.service";
import {Router} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

  newContact: IContact = {
    id: 0,
    user: '',
    email: '',
    company: '',
    code: '',
    note: ''
  };

  formSubmitted = false;

  constructor(private _contactService: ContactService, private _router: Router) {
  }

  addContact(form: NgForm) {

    this.formSubmitted = true;

    if (form.valid) {
      this._contactService.addContact(this.newContact);
      this.formSubmitted = false;
      this._router.navigate(['/contacts']);
    }
  }
}
