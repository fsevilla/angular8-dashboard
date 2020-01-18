import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Promise<any> {
    const url = environment.apiUrl + environment.apiPath + 'users';
    return this.httpClient.get(url).toPromise();
  }
}
