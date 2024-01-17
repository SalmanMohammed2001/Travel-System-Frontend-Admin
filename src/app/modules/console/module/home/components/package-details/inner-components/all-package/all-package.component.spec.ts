import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPackageComponent } from './all-package.component';

describe('AllPackageComponent', () => {
  let component: AllPackageComponent;
  let fixture: ComponentFixture<AllPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPackageComponent]
    });
    fixture = TestBed.createComponent(AllPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
