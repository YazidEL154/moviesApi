import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-nowplaying-list-affiche',
  templateUrl: './movie-nowplaying-list-affiche.component.html',
  styleUrls: ['./movie-nowplaying-list-affiche.component.css']
})
export class MovieNowplayingListAfficheComponent implements OnInit {

  @Input() movieplaying!:Movie;
  
  constructor() { }

  ngOnInit(): void {
  }

}
