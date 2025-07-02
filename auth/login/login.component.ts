import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService,
    private router: Router,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService) { }

  username: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);

  userinfo: any = {};

  
  usernamelocal: string = '';
  passwordlocal: string = '';
  rememberMe: boolean = false;


  ngOnInit() {
    // Check local storage for the rememberMe value
    const storedRememberMe = localStorage.getItem('rememberMe');
    if (storedRememberMe) {
      this.rememberMe = JSON.parse(storedRememberMe);
    }

    // Check local storage for stored username and password
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.usernamelocal = storedUsername;
    }

    const storedPassword = localStorage.getItem('password');
    if (storedPassword) {
      this.passwordlocal = storedPassword;
    }
  }


  submit() {
    this.auth.Login(this.username, this.password).subscribe({
      next: (resp) => {
        console.log(resp)
        localStorage.setItem('token', resp)
        this.auth.SaveUserData();

        this.userinfo = this.auth.userdata.getValue()


        if (this.userinfo.roleid == '21') {

          this.router.navigate(['/admin/dashboard'])
        }
        // else if()
        else
          this.router.navigate(['/'])
        this.toaster.success('You have been login Successfully ')
        this.spinner.hide();




      }, error: (err) => {
        this.toaster.error('Error');
        this.spinner.hide();

      }

    })

  }


  // Method to handle the login
  login() {

    // If Remember Me is checked, store the value in local storage
    if (this.rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('username', this.usernamelocal);
      localStorage.setItem('password', this.passwordlocal);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }
}