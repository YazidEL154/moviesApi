import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopularListAfficheComponent } from './movie-popular-list-affiche.component';

describe('MoviePopularListAfficheComponent', () => {
  let component: MoviePopularListAfficheComponent;
  let fixture: ComponentFixture<MoviePopularListAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePopularListAfficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePopularListAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
