import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNowplayingListAfficheComponent } from './movie-nowplaying-list-affiche.component';

describe('MovieNowplayingListAfficheComponent', () => {
  let component: MovieNowplayingListAfficheComponent;
  let fixture: ComponentFixture<MovieNowplayingListAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNowplayingListAfficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNowplayingListAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
