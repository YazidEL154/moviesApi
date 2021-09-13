import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDetailsComponent } from './affiche-details.component';

describe('AfficheDetailsComponent', () => {
  let component: AfficheDetailsComponent;
  let fixture: ComponentFixture<AfficheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
