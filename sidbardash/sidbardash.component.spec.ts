import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbardashComponent } from './sidbardash.component';

describe('SidbardashComponent', () => {
  let component: SidbardashComponent;
  let fixture: ComponentFixture<SidbardashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidbardashComponent]
    });
    fixture = TestBed.createComponent(SidbardashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
