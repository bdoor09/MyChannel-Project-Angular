import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehomeComponent } from './createhome.component';

describe('CreatehomeComponent', () => {
  let component: CreatehomeComponent;
  let fixture: ComponentFixture<CreatehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatehomeComponent]
    });
    fixture = TestBed.createComponent(CreatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
