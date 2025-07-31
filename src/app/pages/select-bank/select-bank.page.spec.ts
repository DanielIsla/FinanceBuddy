import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectBankPage } from './select-bank.page';

describe('SelectBankPage', () => {
  let component: SelectBankPage;
  let fixture: ComponentFixture<SelectBankPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
