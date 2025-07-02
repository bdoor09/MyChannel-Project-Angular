import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {



  constructor(private http: HttpClient) { }
  sendPaymentREquest(model: any):Observable<any> {
    return this.http.post(`https://localhost:7097/api/Payment/CreatePayment`, model);
  }


  GetPaymentByUserId(userId:string):Observable<any>{
    return this.http.get(`https://localhost:7097/api/Payment/GetPaymentByUserid/${userId}`);
   }

   sendEmailMsg(userId: any):Observable<any>{
    return this.http.get(`https://localhost:7097/api/User/SendEmail/${userId}`);
   }

   getAllUserPaument():Observable<any>{
    return this.http.get('https://localhost:7097/api/Payment/GetPaymentUserInfo');
   }

   
   checkPayment(userid:number):Observable<any>{
    return this.http.get(`https://localhost:7097/api/Payment/checkPayment/${userid}`)
   }

   
}
