import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

export const autorizGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  let toastr:ToastrService= inject(ToastrService);
  let auth:AuthService=inject(AuthService);
  let userinfo:any={}
  
  
   const token = localStorage.getItem('token');
   console.log(state);
  
   if(token){
       if(state.url.indexOf('admin')>0) {
           let user :any = localStorage.getItem('user'); //string
           user = JSON.parse(user);
           userinfo=auth.userdata.getValue()
        console.log(userinfo.roleid)
        if ( userinfo.roleid=='21'){
          toastr.success('Welcome on Admin dashboard');
          return true;
        }
          //  if(user.roleid=='21')
          //  {
          //   toastr.success('Welcome on Admin dashboard');
          //    return true;
          //  }
          else //raghad
          {
           toastr.warning('This page for admin only!');
          router.navigate(['auth/login']);
          return false ;
          }
          
  
       }
      return false;
   }
  
  else //not user
  {
   toastr.warning('Please sign up');
   router.navigate(['auth/register']);
 return false;
  }
  
  
  
 };
  

