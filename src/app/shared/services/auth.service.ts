import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private item:string = 'token';

  loginObservable:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginObservable.next(this.isLoggedIn());
  }

  isLoggedIn():boolean {
    return !!localStorage.getItem(this.item);
  }

  saveToken(token) {
    localStorage.setItem(this.item, token.token);
    this.loginObservable.next(true);
  }

  clearToken() {
    localStorage.removeItem(this.item);
    this.loginObservable.next(false);
  }

  getToken() {
    return localStorage.getItem(this.item) || '';
  }

}
