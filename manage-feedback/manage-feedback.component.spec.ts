import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeedbackComponent } from './manage-feedback.component';

describe('ManageFeedbackComponent', () => {
  let component: ManageFeedbackComponent;
  let fixture: ComponentFixture<ManageFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFeedbackComponent]
    });
    fixture = TestBed.createComponent(ManageFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
