import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidbardashComponent } from './sidbardash/sidbardash.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageAboutusComponent } from './manage-aboutus/manage-aboutus.component';
import { ManageFeedbackComponent } from './manage-feedback/manage-feedback.component';
import { ManageTeamMemberComponent } from './manage-team-member/manage-team-member.component';
import { CreatehomeComponent } from './createhome/createhome.component';
import { SharedModule } from '../shared/shared.module';
import { ManagecontactComponent } from './managecontact/managecontact.component';
import { CreateteamemComponent } from './createteamem/createteamem.component';
import { CreateaboutComponent } from './createabout/createabout.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';





@NgModule({
  declarations: [
    DashboardComponent,
    SidbardashComponent,
    ManageHomeComponent,
    ManageAboutusComponent,
    ManageFeedbackComponent,
    ManageTeamMemberComponent,
    CreatehomeComponent,
    ManagecontactComponent,
    CreateteamemComponent,
    CreateaboutComponent,
    ProfileComponent,
    ManageReportsComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
