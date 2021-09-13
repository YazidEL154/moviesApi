import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNowplayingListComponent } from './movie-nowplaying-list.component';

describe('MovieNowplayingListComponent', () => {
  let component: MovieNowplayingListComponent;
  let fixture: ComponentFixture<MovieNowplayingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNowplayingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNowplayingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
