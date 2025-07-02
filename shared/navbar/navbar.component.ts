import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService, public user:UserService, public notifys:NotifyService){}
  userinfo:any={};
  userdetailes:any;
  islogin:boolean=false;

  notify:any[]=[];

  isnotifyed:boolean=false;


  ngOnInit(): void {
    this.auth.userdata.subscribe({
      next:()=>{
        if(this.auth.userdata.getValue()!=null){
          this.islogin=true
        }
        else{
          this.islogin=false
        }
      }

    })

    this.userinfo= this.auth.userdata.getValue()
    this.user.GetUserById(this.userinfo.userid).subscribe({
      next:(resp)=>{
        this.userdetailes=resp
        console.log("userdetail")
        console.log(this.userdetailes)
        
      }
    })

    this.user.GetNotifyByAdmin(this.userinfo.userid).subscribe({
      next:(resp)=>{
        this.notify=resp
        console.log("notfuuu",this.notify)
      }
    })


    this.notifys.checkNotifcation(this.userinfo.userid).subscribe({
      next: (value) => {
        // Use an arrow function to retain the outer context
        this.isnotifyed = value === true;
      }
    });
  }
  logout(){
    this.auth.LogOut();
  }



}
