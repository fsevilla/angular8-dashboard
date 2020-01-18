import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { MovieService } from './movie.service';
import { MovieFormComponent } from './movie-form/movie-form.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any[];

  constructor(private movieService:MovieService, private dialog:MatDialog) { }

  ngOnInit() {
      this.movieService.getMovies()
        .then(response => {
          this.movies = response;
        });
  }

  onClick(movie) {
    this.dialog.open(MovieFormComponent, {
      width: '400px',
      data: {
        title: movie.title, 
        description: movie.fullplot,
        directors: movie.directors
     }
    });
  }

}
