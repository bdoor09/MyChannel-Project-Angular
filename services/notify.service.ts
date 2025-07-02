import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private http :HttpClient ,private toaster:ToastrService, private spinner:NgxSpinnerService){}
  AllNotifiction:any=[{}];


  CheckNotification(rid:any):Observable<any>{
    return this.http.post('https://localhost:7097/api/Notification/CheckNotification',rid)
  }

  // DeleteNotificationByRid(rid:number):Observable<any>{
  //   return this.http.delete(`https://localhost:7097/api/Notification/DelteNotfyByRid/${rid}`)
  // }

  DeleteNotificationByRid(id:number){
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Notification/DelteNotfyByRid/'+id).subscribe((resp)=>{
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    },err=>{
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    })
  }

  createNewNotification(obj:any):Observable<any>{
    return this.http.post(' https://localhost:7097/api/Notification/CreateNotification/',obj)
  }

  // DeleteNotificationBynotyfyid(nid:number):Observable<any>{
  //   return this.http.delete(`https://localhost:7097/api/Notification/DeleteNotificationt/${nid}`)
  // }

  deleteNotification(notificationId: number): Observable<any> {
    // Adjust the API endpoint and method based on your backend implementation
    return this.http.delete<any>(`https://localhost:7097/api/Notification/DeleteNotificationt/${notificationId}`);
  }


  GetAllNotificationChannel(){
    this.http.get('https://localhost:7097/api/Notification/GetAllNotification').subscribe((resp)=>{
      this.AllNotifiction= resp;
    },err=>{
      console.log(err.message);
      console.log(err.status);
    })
  }


  checkNotifcation(userid:number):Observable<any>{
    return this.http.get(`https://localhost:7097/api/User/checkNotifcation/${userid}`)
   }


}