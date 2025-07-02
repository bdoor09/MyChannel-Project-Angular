import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { error } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient, private toaster: ToastrService, private spinner: NgxSpinnerService, public auth: AuthService) { }

  Numberofvideo: number = 0

  Videos: any = [{}];
  SelectedVideo: any = {};
  singlevideo: any = [{}];
  infoVideo: any = [{}];
  userinfo: any = {};

  GetNumberofvideo() {
    this.http.get('https://localhost:7097/api/Video/TotalVideo').subscribe((resp: any) => {
      this.Numberofvideo = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }


  GetVideossByUserlId(userid: string): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Video/Video/${userid}`);
  }


  //get all

  getAllVideo() {
    this.http.get('https://localhost:7097/api/Video/GetAllVideos').subscribe((resp) => {
      this.Videos = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  getById(id: any): Observable<any> {
    return this.http.get('https://localhost:7097/api/Video/GetVideoById/' + id);
  }


  //upload video

  display_video: any;
  uploadAttachmenvideo(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/Video/uploadVideo', file).subscribe((resp: any) => {
      this.display_video = resp.videourl;
      console.log(this.display_video)
    }, err => {
      this.toaster.error('Error!!')
    })
  }

  display_image_video: any;
  uploadImageForVideo(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/Video/uploadImage', file).subscribe((resp: any) => {
      this.display_image_video = resp.imageurl;
      console.log(this.display_image_video)
    }, err => {
      this.toaster.error('Error!!')
    })
  }

  //create

  CreateVideo(body: any) {
    this.spinner.show();
    body.videourl = this.display_video;
    body.imageurl = this.display_image_video;
    debugger;
    this.http.post('https://localhost:7097/api/Video/CreateVideo', body).subscribe((resp) => {
      console.log(resp);
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.success('Created Successfully')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  CreateVideo1(obj: any): Observable<any> {
    obj.videourl = this.display_video;
    obj.imageurl = this.display_image_video;
    debugger;
    return this.http.post('https://localhost:7097/api/Video/CreateVideo', obj)
  }





  //update

  UpdateVideo(body: any) {
    this.spinner.show();
    body.videourl = this.display_video;
    body.imageurl = this.display_image_video;
    this.http.put('https://localhost:7097/api/Video/UpdateVideo', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, error => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }


  //delete

  DeleteById(id: number) {
    debugger;
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Video/DeleteVideo/' + id).subscribe((res) => {
      this.spinner.hide();
      this.toaster.success('Deleted!!');
    }, error => {
      this.spinner.hide();
      this.toaster.error('Something is wrong');
    }
    );
  }






  UpdateDislike(id: any): Observable<any> {
    return this.http.put(`https://localhost:7097/api/Video/update-dislike/${id}`, {});
  }

  UpdateLike(id: any): Observable<any> {
    return this.http.put(`https://localhost:7097/api/Video/update-like/${id}`, {});
  }

  UpdateDislikeDec(id: any): Observable<any> {
    return this.http.put(`https://localhost:7097/api/Video/update-dislike-Dec/${id}`, {});
  }

  UpdateLikeDec(id: any): Observable<any> {
    return this.http.put(`https://localhost:7097/api/Video/update-like-Dec/${id}`, {});
  }

  getvideoByChannelId(chid: any): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Video/GetVideoByChannelId/'${chid}`);
  }





  //Comment//


  createNewComment(obj: any): Observable<any> {
    return this.http.post('https://localhost:7097/api/Comment/CreateComment', obj).pipe(
      map((resp: any) => {
        // Handle response if needed
        this.toaster.success('Comment created successfully!');
        window.location.reload(); // Refresh the page
 
        return resp;
      }),
      catchError((error: any) => {
        // Handle error
        console.error(error);
        this.toaster.error('Error creating comment.');
        return throwError(error);
      })
    );
  }
 
  ReturnAllComments(videoId: number): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Comment/GetCommentsByVideoId/${videoId}`).pipe(
      map((resp: any) => {
        // Handle response if needed
        return resp;
      }),
      catchError((error: any) => {
        // Handle error
        console.error(error);
        this.toaster.error('Error fetching comments.');
        return throwError(error);
      })
    );
  }
 
  ReturnCommentsCount(videoId: number): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Comment/TotalComment/${videoId}`).pipe(
      map((resp: any) => {
        // Handle response if needed
        return resp;
      }),
      catchError((error: any) => {
        // Handle error
        console.error(error);
        this.toaster.error('Error fetching comment count.');
        return throwError(error);
      })
    );
  }
 
  createNewResponse(obj: any): Observable<any> {
    return this.http.post('https://localhost:7097/api/Response/CreateResponse', obj).pipe(
      map((resp: any) => {
        // Handle response if needed
        this.toaster.success('Response created successfully!');
        window.location.reload(); // Refresh the page
 
        return resp;
      }),
      catchError((error: any) => {
        // Handle error
        console.error(error);
        this.toaster.error('Error creating response.');
        return throwError(error);
      })
    );
  }
 
  ReturnAllResponsesByCommentId(commentId: number): Observable<any> {
    return this.http.get(`https://localhost:7097/api/Response/GetResponsByCommentid/${commentId}`).pipe(
      map((resp: any) => {
        // Handle response if needed
        return resp;
      }),
      catchError((error: any) => {
        // Handle error
        console.error(error);
        this.toaster.error('Error fetching responses.');
       
        return throwError(error);
      })
    );
  }




}
