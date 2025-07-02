import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidbardash',
  templateUrl: './sidbardash.component.html',
  styleUrls: ['./sidbardash.component.css']
})
export class SidbardashComponent implements OnInit {
  constructor(private route:Router,private toaster:ToastrService,public auth:AuthService,public user:UserService,public dialog: MatDialog){}

  userinfo:any={};
  userdetailes:any;

  ngOnInit(): void {
    this.userinfo= this.auth.userdata.getValue()
    // console.log("Hello")
    // console.log(this.userinfo)
    // console.log(this.userinfo.userid)
    this.user.GetUserById(this.userinfo.userid).subscribe({
      next:(resp)=>{
        this.userdetailes=resp
        console.log("userdetail")
        console.log(this.userdetailes)
        
      }
    })
  }

  Logout(){
    this.auth.LogOut();
    // this.userinfo.userid
  }



}
