import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getMovies():Promise<any> {
    const url = environment.apiUrl + environment.apiPath + 'movies';
    return this.httpClient.get(url).toPromise();
  }
}
