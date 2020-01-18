import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService:HttpService) { }

  getMovies():Promise<any> {
    return this.httpService.get('movies').toPromise();
  }
}
