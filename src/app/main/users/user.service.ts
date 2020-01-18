import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  getUsers():Promise<any> {
    return this.httpService.get('users').toPromise();
  }
}
