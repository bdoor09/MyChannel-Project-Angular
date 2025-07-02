import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsubService {

  constructor(private http :HttpClient ){}

  numberOfSub:number=0;  
  channelSub:any;

  GetNumbeUserSub(id:number):Observable<any>{
    return this.http.get(`https://localhost:7097/api/channelsub/GetUserSu/${id}`);

  }



  createChannelSub(body:any):Observable<any>{
    return this.http.post<any>(`https://localhost:7097/api/channelsub/CreateSubscription`,body);
 
}



getNumberOfChannelSub(){
  this.http.get('https://localhost:7097/api/channelsub/TotalUserSub').subscribe((resp:any)=>{
    this.numberOfSub = resp;
  },err=>{
    console.log(err.message);
    console.log(err.status);
  })
}



GetAllSubUser(){
  this.http.get('https://localhost:7097/api/channelsub/GetAllchannelSub').subscribe((resp)=>{
    this.channelSub= resp;
  },err=>{
    console.log(err.message);
    console.log(err.status);
  })
}



GetSubBySubUserId(id:number):Observable<any>{
return this.http.get(`https://localhost:7097/api/channelsub/GetsubBysubuserId/${id}`);

}


}
