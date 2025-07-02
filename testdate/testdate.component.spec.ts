import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdateComponent } from './testdate.component';

describe('TestdateComponent', () => {
  let component: TestdateComponent;
  let fixture: ComponentFixture<TestdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestdateComponent]
    });
    fixture = TestBed.createComponent(TestdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
