import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCustomerComponent } from './find-customer.component';

describe('FindCustomerComponent', () => {
  let component: FindCustomerComponent;
  let fixture: ComponentFixture<FindCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindCustomerComponent]
    });
    fixture = TestBed.createComponent(FindCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
