import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-createteamem',
  templateUrl: './createteamem.component.html',
  styleUrls: ['./createteamem.component.css']
})
export class CreateteamemComponent {
  constructor(public home: HomeService) { }

  createTeam: FormGroup = new FormGroup({
    membername: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // homeid : new FormControl ('',Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    linkedin: new FormControl('', Validators.required),
    imagename: new FormControl('', Validators.required),
  
  })





  save() {
    this.home.CreateTeammembers(this.createTeam.value);
  }

  uploadImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0]
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.home.uploadAttachment(formData);

  }



}
