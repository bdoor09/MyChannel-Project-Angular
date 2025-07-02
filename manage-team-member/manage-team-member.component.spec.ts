import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamMemberComponent } from './manage-team-member.component';

describe('ManageTeamMemberComponent', () => {
  let component: ManageTeamMemberComponent;
  let fixture: ComponentFixture<ManageTeamMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTeamMemberComponent]
    });
    fixture = TestBed.createComponent(ManageTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
