import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
constructor(public home:HomeService ,private router:Router,private auth:AuthService,private toaster:ToastrService ){}

  islogin:boolean=false;
  isAdmin:boolean=false;
  userinfo:any={}
  ngOnInit(): void {
      this.userinfo= this.auth.userdata.getValue()

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
  }

  //FormControl//
  content:FormControl=new FormControl('',Validators.required) ;
  userid:FormControl=new FormControl;
  dtaeofsend:FormControl=new FormControl;
  

  NewFeedback() {
    // this.userinfo= this.auth.userdata.getValue()
    // Set dtaeOfSend to the current date
    const currentDate = new Date();
    this.dtaeofsend.setValue(currentDate.toISOString().split('T')[0]);
    this.userid.setValue(this.userinfo.userid)
      this.home.Feedback(this.content,this.userid,this.dtaeofsend);
      window.location.reload();
      this.toaster.success('Your Feedback Send Successfully')
      
    }
  }





