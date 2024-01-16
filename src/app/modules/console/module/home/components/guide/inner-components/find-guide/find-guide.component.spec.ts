import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGuideComponent } from './find-guide.component';

describe('FindGuideComponent', () => {
  let component: FindGuideComponent;
  let fixture: ComponentFixture<FindGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindGuideComponent]
    });
    fixture = TestBed.createComponent(FindGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
