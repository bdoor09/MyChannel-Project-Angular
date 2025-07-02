import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient, private toaster: ToastrService, private spinner: NgxSpinnerService) { }

  NumberofChannel: number = 0;
  ReportChannel: any = [{}];







  GetNumberOfChannel() {
    this.http.get('https://localhost:7097/api/Channel/TotalChannels').subscribe((resp: any) => {
      this.NumberofChannel = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  //Report on each cannel//
  GetAllReportOnChannel() {
    this.http.get('https://localhost:7097/api/Report/GetAllReportChannel').subscribe((resp) => {
      this.ReportChannel = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }


  GetAllReportOnChanneltest(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7097/api/Report/GetAllReportChannel');
  }



  //Start Channel
  channel: any = [{}];


  GetAllChannel2(): Observable<any> {
    return this.http.get('https://localhost:7097/api/Channel/GetAllChannel');
  }



  GetChannelById(id: string): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Channel/GetChannelByID/${id}`);
  }



  GetChannelsByUserId(userId: string): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Channel/GetChannelsByUserId/${userId}`);
  }





  CreateChannel(body: any) {
    // this.spinner.show();

    debugger
    body.imagename = this.display_imageChannel;
    body.backimage = this.displayback_imageChannel;
    this.http.post('https://localhost:7097/api/Channel/CreateChannel', body).subscribe((resp) => {
      this.toaster.success('Created Successfully');
      this.spinner.hide();
      console.log(resp)
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  UpdateChannel(body: any) {
    this.spinner.show();
    body.imagename = this.display_imageChannel;
    body.backimage = this.displayback_imageChannel;
    this.http.put('https://localhost:7097/api/Channel/UpdateChannel', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }

  DeletChannel(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Channel/DeleteChannel/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    }
    )
  }



  display_imageChannel: any;
  displayback_imageChannel: any;


  uploadChannelImage(file: FormData) {
    this.http.post('https://localhost:7097/api/Channel/uploadImage', file).subscribe((resp: any) => {
      this.display_imageChannel = resp.i = resp.imagename;
    }, err => {
      this.toaster.error('Error!!');
    });
  }

  uploadChannelbackImage(file: FormData) {
    this.http.post('https://localhost:7097/api/Channel/uploadBackImage', file).subscribe(
      (resp: any) => {
        this.displayback_imageChannel = resp.i = resp.backimage;
      },
      (err) => {
        console.error('Error in uploadBackImage:', err);
        this.toaster.error('Error!!');
      }
    );
  }



  GetVideossByChannelId(channelId: string): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Video/GetVideoByChannelId/${channelId}`);
  }




  createNewReport(obj: any): Observable<any> {
    return this.http.post('https://localhost:7097/api/Report/CreateReport', obj)
  }

  CheckSubscribtion(obj: any): Observable<any> {
    return this.http.post('https://localhost:7097/api/channelsub/CheckSubscription', obj)
  }

  DeleteSubscription(chid: number, subid: number): Observable<any> {
    return this.http.delete(`https://localhost:7097/api/channelsub/DeleteSubUser/${chid}/${subid}`)
  }

  Getnumberofchannelbyuid(uid: number) {
    return this.http.get(`https://localhost:7097/api/Channel/CountChannel/${uid}`)

  }



  //Eend Channel

}
