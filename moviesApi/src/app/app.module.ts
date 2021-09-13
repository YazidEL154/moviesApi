import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePopularListComponent } from './movie-popular-list/movie-popular-list.component';
import { MovieNowplayingListComponent } from './movie-nowplaying-list/movie-nowplaying-list.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviePopularListAfficheComponent } from './movie-popular-list/movie-popular-list-affiche/movie-popular-list-affiche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AfficheDetailsComponent } from './movie-popular-list/movie-popular-list-affiche/affiche-details/affiche-details.component';
import { MovieNowplayingListAfficheComponent } from './movie-nowplaying-list/movie-nowplaying-list-affiche/movie-nowplaying-list-affiche.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePopularListComponent,
    MovieNowplayingListComponent,
    MoviePopularListAfficheComponent,
    AfficheDetailsComponent,
    MovieNowplayingListAfficheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
