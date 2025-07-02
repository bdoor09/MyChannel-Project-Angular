import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglechannelComponent } from './singlechannel.component';

describe('SinglechannelComponent', () => {
  let component: SinglechannelComponent;
  let fixture: ComponentFixture<SinglechannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglechannelComponent]
    });
    fixture = TestBed.createComponent(SinglechannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
