import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CreatehomeComponent } from '../createhome/createhome.component';
import { HomeService } from 'src/app/services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit{
  @ViewChild ('calingdeleteHomedialog') calldelete !: TemplateRef<any>
  @ViewChild ('callUpdateHomeDialog') callUpdateHomeDialog !: TemplateRef<any>
  @ViewChild ('content',{static:false}) el !: ElementRef

  updateHome:FormGroup = new FormGroup({
    id : new FormControl ('',Validators.required),
    title : new FormControl ('',Validators.required),
    contents : new FormControl ('',Validators.required),
    imagename : new FormControl (), 
  })
constructor(public home:HomeService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.home.GetAllHome();
  }

  createhome(){
    this.dialog.open(CreatehomeComponent)
  }

  pHomeData:any ;
  openUpdateHomeDailog(obj:any){
    this.pHomeData = obj;
    console.log(this.pHomeData);
    this.updateHome.controls['id'].setValue(this.pHomeData.id);
    this.home.display_imagehome=this.pHomeData.imagename;
    this.dialog.open(this.callUpdateHomeDialog);
  }
  
  updatehome(){
    this.home.UpdateHome(this.updateHome.value);
  }


  DeleteHomec(id:number){
    const dialogRef = this.dialog.open(this.calldelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='yes'){
        this.home.DeletHome(id);

      }
      else{
        console.log('Thank you');
      }
    })


  }


  uploadImageHome(file:any){
    if(file.length==0) return ;
    let fileToUlpoad =<File> file[0]
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.home.uploadImageHome( formData);
  }
  




}


