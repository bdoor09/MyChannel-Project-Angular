import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public auth: AuthService, private router: Router) { }

  firstname: FormControl = new FormControl('', Validators.required);
  lastname: FormControl = new FormControl('', Validators.required);
  age: FormControl = new FormControl('', Validators.required);
  emaile: FormControl = new FormControl('example@gmaiil.com', [Validators.required, Validators.email]);
  city: FormControl = new FormControl('', Validators.required);
  country: FormControl = new FormControl('', Validators.required);
  dateOfBirth: FormControl = new FormControl('', Validators.required);
  registerDate: FormControl = new FormControl('', Validators.required);
  phonenumber: FormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  image: FormControl = new FormControl();
  userName: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmpassword: FormControl = new FormControl('', Validators.required);



  NewUserRegister() {
    // Set registerDate to the current date
    const currentDate = new Date();
    this.registerDate.setValue(currentDate.toISOString().split('T')[0]);

    this.auth.Register(this.firstname, this.lastname, this.age, this.emaile, this.city, this.country, this.dateOfBirth, this.registerDate, this.phonenumber, this.image, this.userName, this.password);

  }



  MatcError() {
    if (this.password.value === this.confirmpassword.value) {
      this.confirmpassword.setErrors(null);
    } else {
      this.confirmpassword.setErrors({ misMatch: true });
    }
  }


  uploadImage(file: any) {
    if (file.length == 0) return;
    let filetoupload = <File>file[0];
    const formData = new FormData();
    formData.append('file', filetoupload, filetoupload.name)
    this.auth.uploadImageUser(formData);
  }



}
