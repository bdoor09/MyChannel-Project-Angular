import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User:any=[];
  numberofUser:number=0;

  constructor(private http :HttpClient ,private toaster:ToastrService, private spinner:NgxSpinnerService){}

  GetAllUser(){
    this.http.get('https://localhost:7097/api/User/GetAllUsers').subscribe((resp)=>{
      this.User = resp;
    },err=>{
      console.log(err.message);
      console.log(err.status);
    })
  }


  GetNuberOfuser(){
    this.http.get('https://localhost:7097/api/User/TotalUser').subscribe((resp:any)=>{
      this.numberofUser = resp;
    },err=>{
      console.log(err.message);
      console.log(err.status);
    })
  }


  DeletUser(id:number){
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/User/DeleteUser/'+id).subscribe((resp)=>{
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    },err=>{
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    }
    )
  }

  GetUserById(id:number):Observable<any>{
    return this.http.get(`https://localhost:7097/api/User/GetUserProfile/${id}`)

  }

 





  //UpdateUserProfile//
  bodyupdate : any;
  UpdateUserProfile( userId:any,firstname: any,lastname: any,age: any,emaile: any,city: any,country: any,dateofbirth: any,username: any,phonenumber:any,image:any){
      this.bodyupdate = {
        userId:parseInt(userId.value, 10),
        firstName: firstname.value.toString(),
        lastName: lastname.value.toString(),
        age: parseInt(age.value, 10), 
        email: emaile.value.toString(),
        city: city.value.toString(),
        country: country.value.toString(),
        dateOfBirth:dateofbirth.value.toString(),
        username: username.value.toString(),
        phonenumber:phonenumber.value.toString(),
        image:image.value.toString()
      }
  
    // Show spinner
    this.spinner.show();
    // Hit API
    debugger; 
    console.log(this.bodyupdate);
    this.bodyupdate.image=this.display_updateimag; 
    this.http.put('https://localhost:7097/api/User/UpdateUserProfile',this.bodyupdate).subscribe(
      (resp: any) => {
        console.log(resp);
        this.toaster.success('Your Account Updated Successfully')
        this.spinner.hide()
      },err=>{
        this.toaster.error('Something is wrong')
        this.spinner.hide();
      })
    
  }

  display_updateimag:any;
  UpdateImageUser(file:FormData){
    debugger;
    this.http.post('https://localhost:7097/api/User/uploadImage',file).subscribe((resp:any)=>{
      this.display_updateimag = resp.image;
      console.log(this.display_updateimag)
    },err=>{
      this.toaster.error('Error!!')
    })
  }

  GetNotifyByAdmin(p_userid:number):Observable<any>{
    return this.http.get(`https://localhost:7097/api/User/GetNotfiByAdmin/${p_userid}`)

  }







}



