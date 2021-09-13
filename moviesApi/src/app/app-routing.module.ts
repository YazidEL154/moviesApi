import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieNowplayingListComponent } from './movie-nowplaying-list/movie-nowplaying-list.component';
import { AfficheDetailsComponent } from './movie-popular-list/movie-popular-list-affiche/affiche-details/affiche-details.component';
import { MoviePopularListAfficheComponent } from './movie-popular-list/movie-popular-list-affiche/movie-popular-list-affiche.component';
import { MoviePopularListComponent } from './movie-popular-list/movie-popular-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  //{path:'popular', component: MoviePopularListComponent, pathMatch:'full'},
  {
    path: 'movie',
    children: [
      { path: 'popular', component: MoviePopularListComponent, pathMatch: 'full' },
      { path: ':id', component: MoviePopularListAfficheComponent }
      ]
    },
  {path:'nowplaying', component: MovieNowplayingListComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
