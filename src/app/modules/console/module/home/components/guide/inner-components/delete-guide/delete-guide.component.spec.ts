import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuideComponent } from './delete-guide.component';

describe('DeleteGuideComponent', () => {
  let component: DeleteGuideComponent;
  let fixture: ComponentFixture<DeleteGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGuideComponent]
    });
    fixture = TestBed.createComponent(DeleteGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
