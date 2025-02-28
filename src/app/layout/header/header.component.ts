import {Component} from '@angular/core';
import {IUser} from "../../core/models/user.model";
import {UserService} from "../../core/services/user/user.service";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  user!: IUser;

  constructor(private _userService: UserService) {
    this._userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    )
  }
}
