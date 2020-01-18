import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }

  signup(user:any) {
    const data:SignUpData = {
      name: user.name,
      email: user.email,
      password: user.password
    };
    const url = environment.apiUrl + 'signup';
    return this.httpClient.post(url,data).toPromise();
  }
}
