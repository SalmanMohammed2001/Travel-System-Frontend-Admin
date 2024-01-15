import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDriverComponent } from './find-driver.component';

describe('FindDriverComponent', () => {
  let component: FindDriverComponent;
  let fixture: ComponentFixture<FindDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindDriverComponent]
    });
    fixture = TestBed.createComponent(FindDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
