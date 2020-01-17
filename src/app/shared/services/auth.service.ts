import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private item:string = 'token';

  constructor() { }

  isLoggedIn():boolean {
    return !!localStorage.getItem(this.item);
  }

  saveToken(token) {
    localStorage.setItem(this.item, token.token);
  } 

}
