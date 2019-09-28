import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieFormComponent } from './new-movie-form.component';

describe('NewMovieFormComponent', () => {
  let component: NewMovieFormComponent;
  let fixture: ComponentFixture<NewMovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
