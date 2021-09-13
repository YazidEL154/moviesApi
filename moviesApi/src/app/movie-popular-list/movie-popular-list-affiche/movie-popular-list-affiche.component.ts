import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/shared/models/details';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-popular-list-affiche',
  templateUrl: './movie-popular-list-affiche.component.html',
  styleUrls: ['./movie-popular-list-affiche.component.css']
})
export class MoviePopularListAfficheComponent implements OnInit {

  id!: number;
  detail!: Details;
  @Input() movie!:Movie;
   
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    //this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getAffiche(this.id);
  }

  private getAffiche(id: number): void {
    this.movieService.getAffiche(id).subscribe((detail: Details)=>{
      console.log(this.detail);
      this.detail = detail;
    });
  }

}
