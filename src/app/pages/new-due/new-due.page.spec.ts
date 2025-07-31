import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewDuePage } from './new-due.page';

describe('NewDuePage', () => {
  let component: NewDuePage;
  let fixture: ComponentFixture<NewDuePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
