import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomizableDropdownInputPopupComponent } from './customizable-dropdown-input-popup.component';

describe('CustomizableDropdownInputPopupComponent', () => {
  let component: CustomizableDropdownInputPopupComponent;
  let fixture: ComponentFixture<CustomizableDropdownInputPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizableDropdownInputPopupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizableDropdownInputPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
