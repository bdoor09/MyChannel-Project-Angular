import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accountmanage',
  templateUrl: './accountmanage.component.html',
  styleUrls: ['./accountmanage.component.css']
})
export class AccountmanageComponent implements OnInit {
  constructor(private route: Router, private toaster: ToastrService, public auth: AuthService, public user: UserService, public dialog: MatDialog) { }
  @ViewChild('calinViewProfiledialog') callUpdateUserDialog !: TemplateRef<any>

  handleFileSelection(event: any) {
    const file = event.target.files[0];

    // Assuming you want to preview the selected image
    this.previewImage(file);

    // You can also handle further logic here, such as uploading the file
    this.uploadImage(file);
  }

  userinfo: any = {};
  userdetailes: any = {};


  imageSrc: string = 'src/assets/userImage/{{userdetailes.image}}';




  ngOnInit(): void {
    this.userinfo = this.auth.userdata.getValue()
    this.user.GetUserById(this.userinfo.userid).subscribe({
      next: (resp) => {
        this.userdetailes = resp
      }
    })
  }



  userId: FormControl = new FormControl();
  firstName: FormControl = new FormControl('', Validators.required);
  lastName: FormControl = new FormControl('', Validators.required);
  age: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('example@gmaiil.com', [Validators.required, Validators.email]);
  city: FormControl = new FormControl('', Validators.required);
  country: FormControl = new FormControl('', Validators.required);
  dateOfBirth: FormControl = new FormControl('', Validators.required);
  username: FormControl = new FormControl('', Validators.required);
  phonenumber: FormControl = new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]);
  image: FormControl = new FormControl()


  UpdateUser() {
    this.userId.setValue(this.userinfo.userid)
    // this.image=this.user.display_updateimag
    this.user.UpdateUserProfile(this.userId, this.firstName, this.lastName, this.age, this.email, this.city, this.country, this.dateOfBirth, this.username, this.phonenumber, this.image)

  }


  uploadImage(file: any) {
    if (!file) return;

    const fileToUpload = <File>file;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.user.UpdateImageUser(formData);
  }

  previewImage(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  pUData: any;
  openUpdateUserDailog(obj: any) {
    this.pUData = obj;
    console.log(this.pUData);
    this.userId.setValue(this.pUData.userid);
    this.user.display_updateimag = this.pUData.image
    this.dialog.open(this.callUpdateUserDialog);
  }





}