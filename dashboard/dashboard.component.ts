import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Chart from 'chart.js';
import { ChannelService } from 'src/app/services/channel.service';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import jsPDF from 'jspdf';
import { AuthService } from 'src/app/services/auth.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  @ViewChild ('calingdeleteUserlog') calldeleteUser !: TemplateRef<any>
  // @ViewChild ('content',{static:false}) el !: ElementRef
  _userfilter :string ='';

  hover: boolean = false;
  userinfo:any={};

  userdetailes:any;


  generatePdf(){
    let docDefinition={
      content:['this is is a simple pre']
    };

    pdfMake.createPdf(docDefinition).open();
  }


  constructor(public user:UserService,public channel:ChannelService,public viedo:VideosService,public dialog: MatDialog,public report:ReportService, public auth:AuthService){}
  ngOnInit(): void {
    this.user.GetAllUser();
    this.user.GetNuberOfuser();
    this.channel.GetNumberOfChannel();
    this.viedo.GetNumberofvideo();
    this.report.GetNumberOfReport();
    this.userinfo= this.auth.userdata.getValue()
    // console.log("Hello")
    // console.log(this.userinfo)
    // console.log(this.userinfo.userid)
    this.user.GetUserById(this.userinfo.userid).subscribe({
      next:(resp)=>{
        this.userdetailes=resp
        console.log("userdetail")
        console.log(this.userdetailes)
        
      }
    })
    
  
  }


  DeleteUser(id:number){
    const dialogRef = this.dialog.open(this.calldeleteUser);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='yes'){
        this.user.DeletUser(id);

      }
      else{
        console.log('Thank you');
      }
    })


  }
  



  // makepdf(){

  //   let pdf = new jsPDF
  //   pdf.html(this.el.nativeElement,{
  //     callback: (pdf) =>{
  //       pdf.save('sample.pdf')
  //     }
  //   })

  // }


  



}
