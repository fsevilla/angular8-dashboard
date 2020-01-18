import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  get(url) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });

    const fullUrl = environment.apiUrl + environment.apiPath + url;

    return this.httpClient.get(fullUrl, { headers });
  }

  post(url, body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });

    const fullUrl = environment.apiUrl + environment.apiPath + url;

    return this.httpClient.post(fullUrl, body, { headers });
  }
}
