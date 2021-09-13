import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-nowplaying-list',
  templateUrl: './movie-nowplaying-list.component.html',
  styleUrls: ['./movie-nowplaying-list.component.css']
})
export class MovieNowplayingListComponent implements OnInit {

  nowplaying!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMoviesPlaying().subscribe((data: any) => {
      this.nowplaying = data.results;
      console.log(this.nowplaying);
    })
    
  }

}
