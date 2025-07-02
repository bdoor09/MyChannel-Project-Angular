import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { ManageFeedbackComponent } from './manage-feedback/manage-feedback.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageAboutusComponent } from './manage-aboutus/manage-aboutus.component';
import { ManageTeamMemberComponent } from './manage-team-member/manage-team-member.component';
import { ManagecontactComponent } from './managecontact/managecontact.component';
// import { ManagereportComponent } from './managereport/managereport.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'managehome',
    component:ManageHomeComponent
  },
  {
    path:'manageabout',
    component:ManageAboutusComponent
  },
  {
    path:'managefeedback',
    component:ManageFeedbackComponent
  },
  {
    path:'manageteammembers',
    component:ManageTeamMemberComponent
  },
  {
    path:'managecontact',
    component:ManagecontactComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'reports',
    component:ManageReportsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
