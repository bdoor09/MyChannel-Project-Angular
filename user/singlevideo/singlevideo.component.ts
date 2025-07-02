import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelService } from 'src/app/services/channel.service';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.css']
})
export class SinglevideoComponent implements OnInit {
  constructor(private vid: VideosService,
    private _route: ActivatedRoute,
    public auth: AuthService, private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    public channel: ChannelService,
    public user: UserService
  ) { }


  videoId: string = '';
  video: any;
  allComments: any[] = [];
  allResponses: any[] = [];
  commentsCount: number = 0;
  userinfo: any = {};
  userdetailes: any;

  islogin: boolean = false;


  showReplyForm: boolean[] = Array(this.allComments.length).fill(false);

  //FormGroup Of Comment
  myForm: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]) // Add Validators.required for content
  });

  replyForm: FormGroup = new FormGroup({
    replaycomment: new FormControl('', Validators.required)
  });

  //FormGroup Of Comment


  ngOnInit() {
    this.vid.getAllVideo();
    this.userinfo = this.auth.userdata.getValue();

    this.videoId = this._route.snapshot.params['id'];
    this.vid.getById(this.videoId).subscribe({
      next: (res) => {
        this.video = res
      }
    })


    //GetUserById
    this.user.GetUserById(this.userinfo.userid).subscribe({
      next: (resp) => {
        this.userdetailes = resp
        console.log("userdetail")
        console.log(this.userdetailes)

      }
    })

    //To check if user is login or not
    this.auth.userdata.subscribe({
      next: () => {
        if (this.auth.userdata.getValue() != null) {
          this.islogin = true

        }

        else {
          this.islogin = false
        }
      }

    })




    //return all comments By Video Id
    this.vid.ReturnAllComments(+this.videoId).subscribe({
      next: (response) => {
        console.log('all comments', response);
        this.allComments = response;
      }
    });



    //return numbers of comments
    this.vid.ReturnCommentsCount(+this.videoId).subscribe({
      next: (response) => {
        console.log('count', response);
        this.commentsCount = response;
      }
    });

  }



  getDataById() {
    this.vid.getById(this.videoId).subscribe(videoData => {
      this.video = videoData;
    });
  }




  updateLike(videoId: string) {
    this.vid.UpdateLike(videoId).subscribe(
      (response) => {
        this.video.numberoflike++;
        this.video.isLiked = true;
        this.updateLikeStatusInBackend(videoId, true);
      },
      (error) => {
        // Handle the error
      }
    );
  }



  updateLikeDec(videoId: string) {
    this.vid.UpdateLikeDec(videoId).subscribe(
      (response) => {
        this.video.numberoflike--;
        this.video.isLiked = false;
        this.updateLikeStatusInBackend(videoId, false);
      },
      (error) => {
        // Handle the error
      }
    );
  }



  updateLikeStatusInBackend(videoId: string, isLiked: boolean) {

  }



  updateDislike(videoId: string) {
    this.vid.UpdateDislike(videoId).subscribe(
      (response) => {
        this.video.numberofdislike++;
        this.video.isDisliked = true;
        this.updateDislikeStatusInBackend(videoId, true);
      },
      (error) => {
        // Handle the error
      }
    );
  }



  updateDislikeDec(videoId: string) {
    this.vid.UpdateDislikeDec(videoId).subscribe(
      (response) => {
        this.video.numberofdislike--;
        this.video.isDisliked = false;
        this.updateDislikeStatusInBackend(videoId, false);
      },
      (error) => {
        // Handle the error
      }
    );
  }

  updateDislikeStatusInBackend(videoId: string, isDisliked: boolean) {

  }






  //Comment//
  //add  comment
  NewComment() {
    this.userinfo = this.auth.userdata.getValue()
    // Set dtaeOfSend to the current date
    const currentDate = new Date();

    let myComment: any = {
      content: this.myForm.get('content')?.value,
      commentdate: currentDate.toISOString().split('T')[0],
      videoid: this.videoId,
      userId: this.userinfo.userid,

    }


    this.vid.createNewComment(myComment).subscribe({
      next: (res) => {
        console.log(res.message);
        this.spinner.hide();
        this.toaster.success('Comment created successfully', 'Success');

      },
      error: (error) => {
        console.error('Error creating Comment', error);
        this.spinner.hide();
        this.toaster.error('Error creating Comment', 'Error');
      }


    })


  }



  //add reply to any comment
  submitReply(id: string) {

    let myResponse: any = {
      replaycomment: this.replyForm.get('replaycomment')?.value,
      commentid: id,
      usercid: this.userinfo.userid
    }

    this.vid.createNewResponse(myResponse).subscribe({
      next: () => {
        console.log('reply response success');

      }
    });


  }


  // Function to toggle the display of the reply form
  toggleReplyForm(index: number, id: string) {
    this.showReplyForm[index] = !this.showReplyForm[index];

    console.log('response comment id', id);

    this.vid.ReturnAllResponsesByCommentId(+id).subscribe({
      next: (response) => {
        console.log('all responses', response);
        this.allResponses = response
      }
    });

  }

}







