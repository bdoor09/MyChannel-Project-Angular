import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  Report:any=[{}];

  NumberOfRepor:number=0;

  constructor(private http :HttpClient ,private toaster:ToastrService, private spinner:NgxSpinnerService){}

  DeletRepor(id:number){
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Report/DeleteReport/'+id).subscribe((resp)=>{
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    },err=>{
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    })
  }


  GetAllReport(){
    this.http.get('https://localhost:7097/api/Report/GetAllReport').subscribe((resp)=>{
      this.Report = resp;
    },err=>{
      console.log(err.message);
      console.log(err.status);
    })
  }

  GetNumberOfReport(){
    this.http.get('https://localhost:7097/api/Report/TotalReport').subscribe((resp:any)=>{
      this.NumberOfRepor = resp;
    },err=>{
      console.log(err.message);
      console.log(err.status);
    })
  }





}
