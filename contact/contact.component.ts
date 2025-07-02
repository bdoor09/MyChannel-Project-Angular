import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(public home:HomeService,private rout:Router){}
  ngOnInit(): void {
    this.home.GetAllContact();
  }

  name:FormControl=new FormControl('',Validators.required) ;
  subject:FormControl=new FormControl('',Validators.required) ;
  content:FormControl=new FormControl('',Validators.required) ;
  email:FormControl= new FormControl('',[Validators.required,Validators.email]);  




  

  NewContact() {
    // this.userinfo= this.auth.userdata.getValue()
    // Set dtaeOfSend to the current date
      this.home.Contactus(this.name,this.subject,this.content,this.email);
      setTimeout(() => {
        this.rout.navigate(['/']);
      }, 2000);
    }



}







