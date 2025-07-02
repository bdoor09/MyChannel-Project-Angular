import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanageComponent } from './accountmanage.component';

describe('AccountmanageComponent', () => {
  let component: AccountmanageComponent;
  let fixture: ComponentFixture<AccountmanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountmanageComponent]
    });
    fixture = TestBed.createComponent(AccountmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
