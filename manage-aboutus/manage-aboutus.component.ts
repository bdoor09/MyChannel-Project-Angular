import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';
import { CreateaboutComponent } from '../createabout/createabout.component';

@Component({
  selector: 'app-manage-aboutus',
  templateUrl: './manage-aboutus.component.html',
  styleUrls: ['./manage-aboutus.component.css']
})
export class ManageAboutusComponent implements OnInit{
  @ViewChild ('calingupdateAboutdialog') callUpdateAboutDialog !: TemplateRef<any>
  @ViewChild ('calingdeleteAboutdialog') calldeleteabout !: TemplateRef<any>
 
 
  updateAbout:FormGroup = new FormGroup({
    id : new FormControl ('',Validators.required),
    title : new FormControl ('',Validators.required),
    contents : new FormControl ('',Validators.required),
    imagename : new FormControl ()
  })
constructor(public home:HomeService,public dialog: MatDialog){}
 
  ngOnInit(): void {
    this.home.GetAllAbout();
  }
 
  createabout(){
    this.dialog.open(CreateaboutComponent)
  }
 
  pAData:any ;
  openUpdateADailog(obj:any){
    this.pAData = obj;
    console.log(this.pAData);
    this.updateAbout.controls['id'].setValue(this.pAData.id);
    this.home.display_imag=this.pAData.imagename;
    this.dialog.open(this.callUpdateAboutDialog);
  }



  updateabout(){
    this.home.Updateabout(this.updateAbout.value);
  }
 
 
  DeleteAbout(id:number){
    const dialogRef = this.dialog.open(this.calldeleteabout);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='yes'){
        this.home.Deletabout(id);
 
      }
      else{
        console.log('Thank you');
      }
    })
 
 
  }

  uploadVideoAbout(file:any){
    if(file.length==0) return ;
    let fileToUlpoad =<File> file[0]
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.home.uploadAttachmenA ( formData);
   
  }


  

}
