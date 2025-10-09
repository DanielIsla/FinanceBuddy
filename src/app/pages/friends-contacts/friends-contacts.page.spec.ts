import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendsContactsPage } from './friends-contacts.page';

describe('FriendsContactsPage', () => {
  let component: FriendsContactsPage;
  let fixture: ComponentFixture<FriendsContactsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
