import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';




@Component({
  selector: 'app-createhome',
  templateUrl: './createhome.component.html',
  styleUrls: ['./createhome.component.css']
})
export class CreatehomeComponent {
constructor(public home:HomeService){}

createhome:FormGroup = new FormGroup({
  title : new FormControl ('',Validators.required),
  contents : new FormControl ('',Validators.required),
  imagename : new FormControl(),
})

save(){
  this.home.CreateHome(this.createhome.value);
}

uploadImageHome(file:any){
  if(file.length==0) return ;
  let fileToUlpoad =<File> file[0]
  const formData = new FormData();
  formData.append('file', fileToUlpoad, fileToUlpoad.name);
  this.home.uploadImageHome(formData);
}
}
