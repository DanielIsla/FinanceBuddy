import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DueManagerPage } from './due-manager.page';

describe('DueManagerPage', () => {
  let component: DueManagerPage;
  let fixture: ComponentFixture<DueManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DueManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
