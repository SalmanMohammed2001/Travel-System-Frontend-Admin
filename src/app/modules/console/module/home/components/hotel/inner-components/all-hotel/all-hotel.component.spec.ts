import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHotelComponent } from './all-hotel.component';

describe('AllHotelComponent', () => {
  let component: AllHotelComponent;
  let fixture: ComponentFixture<AllHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHotelComponent]
    });
    fixture = TestBed.createComponent(AllHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
