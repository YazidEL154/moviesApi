import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details } from '../models/details';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any>{
    return this.http.get<any>(`${environment.typicode_url}popular?api_key=216ab1116efce1c439dcc16a38749b3b&language=en-US&page=1`);
  }

  getPopularMoviesPlaying(): Observable<any>{
    return this.http.get<any>(`${environment.typicode_url}now_playing?api_key=216ab1116efce1c439dcc16a38749b3b&language=en-US&page=1`);
  }

  getAffiche(id: number): Observable<Details>{
    return this.http.get<Details>(`${environment.typicode_url}${id}?api_key=216ab1116efce1c439dcc16a38749b3b`);
  }

}
