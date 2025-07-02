import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // getAllTeamMembers() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient, private toaster: ToastrService, private spinner: NgxSpinnerService) { }

  Home: any = [{}];
  Featur: any = [{}];
  About: any = [{}];
  Team: any = [{}];
  Contact: any = [{}];

  numberofteam: number = 0;
  feedback: any = [{}];


  //Start Home//
  GetAllHome() {
    this.http.get('https://localhost:7097/api/Home/GetAllHome').subscribe((resp) => {
      this.Home = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  CreateHome(body: any) {
    this.spinner.show();
    body.imagename = this.display_imagehome;
    debugger;
    this.http.post('https://localhost:7097/api/Home/CreateHome', body).subscribe((resp) => {

      this.toaster.success('Created Successfully');
      console.log(resp);
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  UpdateHome(body: any) {
    this.spinner.show();
    body.imagename = this.display_imagehome;
    this.http.put('https://localhost:7097/api/Home/UpdateHome', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }



  DeletHome(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Home/DeleteHome/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    })
  }

  display_imagehome: any;
  uploadImageHome(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/Home/uploadImage', file).subscribe((resp: any) => {
      this.display_imagehome = resp.imagename;
      console.log(this.display_imagehome)
    }, err => {
      this.toaster.error('Error!!')
    })
  }

  //End Home//





  // Start Features//
  GetAllFeatures() {
    this.http.get('https://localhost:7097/api/Features/GetAllFEATURES').subscribe((resp) => {
      this.Featur = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  CreateFeatures(body: any) {
    this.spinner.show();
    body.imagename = this.display_imagefeatures;
    debugger;
    this.http.post('https://localhost:7097/api/Features/CreateFEATURES', body).subscribe((resp) => {
      console.log(resp)
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();
  }


  UpdateFeatures(body: any) {
    this.spinner.show();
    body.imagename = this.display_imagefeatures;
    debugger;
    this.http.put('https://localhost:7097/api/Features/UpdateFEATURES', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }



  DeletFeatures(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Features/DeleteFEATURES/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();


    }
    )
  }

  display_imagefeatures: any;
  uploadFeatuerImage(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/Features/uploadImage', file).subscribe((resp: any) => {
      this.display_imagefeatures = resp.imagename;
      console.log(this.display_imagefeatures)
    }, err => {
      this.toaster.error('Error!!')
    })
  }
  // End Features//




  //Start contact //

  GetAllContact() {
    this.http.get('https://localhost:7097/api/Contact/GetAllContact').subscribe((resp) => {
      this.Contact = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  CreateContact(body: any) {
    this.spinner.show();
    // body.imageanme=this.display_imag;
    this.http.post('https://localhost:7097/api/Contact/CreateContact', body).subscribe((resp) => {
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  UpdateContact(body: any) {
    this.spinner.show();
    // body.imageanme=this.display_imag;
    this.http.put('https://localhost:7097/api/Contact/UpdateContact', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }



  DeletContact(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Contact/DeleteContact/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    }
    )
  }
  //End contact//







  //Start Teammembers//
  GetAllTeammembers() {
    this.http.get('https://localhost:7097/api/TeamMembers/GetAllTeam').subscribe((resp) => {
      this.Team = resp;
      this.numberofteam = this.Team.length
      console.log(this.Team.length)
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  CreateTeammembers(body: any) {
    this.spinner.show();
    debugger
    body.imagename = this.display_imageTeam;
    this.http.post('https://localhost:7097/api/TeamMembers/CreateTeam',body).subscribe((resp) => {
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  UpdateTeammembers(body: any) {
    this.spinner.show();
    body.imagename = this.display_imageTeam;
    this.http.put('https://localhost:7097/api/TeamMembers/UpdateTeam', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }



  DeletTeammembers(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/TeamMembers/DeleteTeam/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    }
    )
  }


  display_imageTeam: any;
  uploadAttachment(file: FormData) {

    this.http.post('https://localhost:7097/api/TeamMembers/uploadImage',file).subscribe((resp: any) => {
      this.display_imageTeam = resp.i = resp.imagename;
    }, err => {
      this.toaster.error('Error!!')
    })
  }

  //End Teammembers//




  //Start About us
  GetAllAbout() {
    this.http.get('https://localhost:7097/api/About/GetAllAbout').subscribe((resp) => {
      this.About = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }

  Createabout(body: any) {
    this.spinner.show();
    body.imagename = this.display_imag;
    debugger;
    this.http.post('https://localhost:7097/api/About/CreateAbout', body).subscribe((resp) => {
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  Updateabout(body: any) {
    this.spinner.show();
    body.imagename = this.display_imag;
    this.http.put('https://localhost:7097/api/About/UpdateAbout', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }

  Deletabout(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/About/DeleteAbout/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();

    }
    )
  }




  display_imag: any;
  uploadAttachmenA(file: FormData) {
    debugger;
    this.http.post('https://localhost:7097/api/About/uploadVideo', file).subscribe((resp: any) => {
      this.display_imag = resp.imagename;
      console.log(this.display_imag)
    }, err => {
      this.toaster.error('Error!!')
    })
  }




  //Eend About us






  //Feedback Start//


  bodyF: any;
  Feedback(content: any, user_id: any, dtaeOfSend: any) {
    // Get the current date and format it as YYYY-MM-DD
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    this.bodyF = {
      content: content.value.toString(),
      dtaeOfSend: formattedDate,
      userId: parseInt(user_id.value, 10),
    }

    // Show spinner
    this.spinner.show();
    // Hit API
    console.log(this.bodyF);
    debugger;
    this.http.post('https://localhost:7097/api/Feedback/CreateFeedback', this.bodyF).subscribe(
      (resp: any) => {
        console.log(resp);
        this.toaster.success('Your FeedBack Send Successfully')
        this.spinner.hide()
      }, err => {
        this.toaster.error('Something is wrong')
        this.spinner.hide();
      })

  }


  //Create feedback//
  FeedbackA: any = [{}];


  GetAllFeedback() {
    this.http.get('https://localhost:7097/api/Feedback/GetallFeedbackUser').subscribe((resp) => {
      this.FeedbackA = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }


  CreateaFeedback(body: any) {
    this.spinner.show();
    debugger;
    this.http.post('https://localhost:7097/api/Feedback/CreateFeedback', body).subscribe((resp) => {
      this.toaster.success('Created Successfully');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong')
      this.spinner.hide();
    })

    // window.location.reload();

  }

  UpdateFeedback(body: any) {
    this.spinner.show();
    this.http.put('https://localhost:7097/api/Feedback/UpdateFeedback/', body).subscribe((resp) => {
      this.toaster.success('Updated Successfully ');
      this.spinner.hide();
    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    })
  }

  DeletFeedback(id: number) {
    this.spinner.show();
    this.http.delete('https://localhost:7097/api/Feedback/DelteFeedback/' + id).subscribe((resp) => {
      this.toaster.success('Deleted Successfully');
      this.spinner.hide();

    }, err => {
      this.toaster.error('Something is wrong');
      this.spinner.hide();
    }
    )
  }

  Get4topfeedback() {
    this.http.get('https://localhost:7097/api/Feedback/topfourfeedback').subscribe((resp) => {
      this.feedback = resp;
    }, err => {
      console.log(err.message);
      console.log(err.status);
    })
  }


  //Feedback End//





  //contact us Start//

  bodycon: any;
  Contactus(name: any, subject: any, content: any, email: any) {
    this.bodycon = {
      name: name.value.toString(),
      subject: subject.value.toString(),
      content: content.value.toString(),
      email: email.value.toString(),
    }

    // Show spinner
    this.spinner.show();
    // Hit API
    console.log(this.bodycon);
    debugger;
    this.http.post('https://localhost:7097/api/Contact/CreateContact', this.bodycon).subscribe(
      (resp: any) => {
        console.log(resp);
        this.toaster.success('We Contact whith you as soon as possbble')
        this.spinner.hide()
      }, err => {
        this.toaster.error('Something is wrong')
        this.spinner.hide();
      })

  }







}
