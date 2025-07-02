import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechannelComponent } from './createchannel.component';

describe('CreatechannelComponent', () => {
  let component: CreatechannelComponent;
  let fixture: ComponentFixture<CreatechannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatechannelComponent]
    });
    fixture = TestBed.createComponent(CreatechannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
