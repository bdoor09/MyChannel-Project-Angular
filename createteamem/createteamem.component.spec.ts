import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamemComponent } from './createteamem.component';

describe('CreateteamemComponent', () => {
  let component: CreateteamemComponent;
  let fixture: ComponentFixture<CreateteamemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateteamemComponent]
    });
    fixture = TestBed.createComponent(CreateteamemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
