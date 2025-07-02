import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChannelComponent } from './channel/channel.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { SinglevideoComponent } from './user/singlevideo/singlevideo.component';
import { autorizGuard } from './autoriz.guard';
import { UserPaymentComponent } from './user-payment/user-payment.component';
// import { TestdateComponent } from './testdate/testdate.component';
// import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'channel',
    component: ChannelComponent
  },

  {
    path: 'helpcenter',
    component: HelpcenterComponent
  },

  {
    path: 'singlevideo',
    component: SinglevideoComponent
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [autorizGuard]
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },

  {
    path: 'payment',
    component: UserPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
