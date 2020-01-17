import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(credentials:Credentials):Promise<any> {
    const url = environment.apiUrl + 'login';
    credentials.username = credentials.email;
    delete credentials.email;
    return this.httpClient.post(url, credentials).toPromise();
  }
}
