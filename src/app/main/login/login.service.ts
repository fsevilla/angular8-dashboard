import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { Credentials } from './credentials';
import { AuthService } from './../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  login(credentials:Credentials):Promise<any> {
    const url = environment.apiUrl + 'login';
    credentials.username = credentials.email;
    delete credentials.email;
    return this.httpClient.post(url, credentials).toPromise();
  }

  me() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });
    const url = environment.apiUrl + 'me';
    return this.httpClient.get(url, { headers }).toPromise();
  }
}
