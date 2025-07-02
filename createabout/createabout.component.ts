import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-createabout',
  templateUrl: './createabout.component.html',
  styleUrls: ['./createabout.component.css']
})
export class CreateaboutComponent {
  constructor(public home:HomeService){}
 

  //Form 
  createabout:FormGroup = new FormGroup({
    title : new FormControl ('',Validators.required),
    contents : new FormControl ('',Validators.required),
    imagename : new FormControl ()
 
  })

 
  save(){
    this.home.Createabout(this.createabout.value);
  }
  

  uploadVideoAbout(file:any){
    if(file.length==0) return ;
    let fileToUlpoad =<File> file[0]
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.home.uploadAttachmenA ( formData);
   
  }



}
