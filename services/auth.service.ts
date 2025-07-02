import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userdata = new BehaviorSubject(null);

  constructor(private http: HttpClient
    , private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) {


    if (localStorage.getItem('token')) {
      this.SaveUserData()
    }
    else {
      localStorage.removeItem('token')

    }
  }


  

  //Register//
  body: any;

  Register(firstname: any, lastname: any, age: any, emaile: any, city: any, country: any, dateofbirth: any, registerdate: any, phonenumber: any, image: any, username: any, password: any) {
    // Get the current date and format it as YYYY-MM-DD
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    this.body = {
      firstname: firstname.value.toString(),
      lastname: lastname.value.toString(),
      age: parseInt(age.value, 10),
      emaile: emaile.value.toString(),
      city: city.value.toString(),
      country: country.value.toString(),
      dateOfBirth: dateofbirth.value.toString(),
      registerDate: formattedDate,
      phonenumber: phonenumber.value.toString(),
      image: image.value.toString(),
      userName: username.value.toString(),
      password: password.value.toString(),
    }

    // Show spinner
    this.spinner.show();

    // Hit API

    console.log(this.body);
    this.body.image = this.display_imaguser;
    debugger;
    this.http.post('https://localhost:7097/api/Login/Register', this.body).subscribe(
      (resp: any) => {
        console.log(resp);
        this.spinner.hide()
        this.toaster.success('Your Account Created Successfully')
        this.router.navigate(['auth/login'])
      }, err => {
        this.toaster.error('Something is wrong')
        this.spinner.hide();
      })

  }

  display_imaguser: any;
  uploadImageUser(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/User/uploadImage', file).subscribe((resp: any) => {
      this.display_imaguser = resp.image;
      console.log(this.display_imaguser)
    }, err => {
      this.toaster.error('Error!!')
    })
  }


  //Login//

  bodyy: any;

  Login(username: any, password: any): Observable<any> {
    this.body = {
      username: username.value.toString(),
      password: password.value.toString()
    }
    const headerDir = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requsterOptions = {
      headers: new HttpHeaders(headerDir)
    }

    //show spinner
    this.spinner.show();
    //hits API
    // console.log(this.body);
    return this.http.post('https://localhost:7097/api/Login/Login', this.body, requsterOptions)


  }


  SaveUserData() {
    let encodetoken = JSON.stringify(localStorage.getItem('token'))
    let decodetoken: any = jwtDecode(encodetoken)
    this.userdata.next(decodetoken)
    console.log(decodetoken)
  }

  LogOut() {
    localStorage.removeItem('token')
    this.userdata.next(null)
    this.router.navigate(['/auth/login'])
    this.toaster.success("You have been logout Successfully ")
    localStorage.removeItem('hasPayment')
  }


}







