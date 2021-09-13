import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-popular-list',
  templateUrl: './movie-popular-list.component.html',
  styleUrls: ['./movie-popular-list.component.css']
})
export class MoviePopularListComponent implements OnInit {

 popularmovies!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.popularmovies = data.results;
      console.log(this.popularmovies);
    })
    
  }

}
