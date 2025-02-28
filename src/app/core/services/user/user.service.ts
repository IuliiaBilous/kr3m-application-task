import {Injectable} from '@angular/core';
import {IUser} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: IUser;

  constructor(private _httpClient: HttpClient) {
  }

  public getUser(): Observable<IUser> {
    if (!this.user) {
      return this._httpClient.get<IUser>('/assets/user.json').pipe(
        map(data => this.user = data)
      );
    } else {
      return of(this.user);
    }
  }
}
