import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopularListComponent } from './movie-popular-list.component';

describe('MoviePopularListComponent', () => {
  let component: MoviePopularListComponent;
  let fixture: ComponentFixture<MoviePopularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePopularListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
