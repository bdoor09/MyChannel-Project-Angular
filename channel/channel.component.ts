
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';
import { ChannelsubService } from '../services/channelsub.service'
import { ChannelService } from '../services/channel.service'
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private router: Router,
    public channel: ChannelService,
    public dialog: MatDialog,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService, public auth: AuthService) { }
  @ViewChild('callReportChannelDialog') callReportChannelDialog!: TemplateRef<any>;

  _chaneelfilttertext: string = '';

  listofchannel: any[] = [];
  chanId: string = '';

  islogin: boolean = false;


  ngOnInit(): void {

    this.channel.GetAllChannel2().subscribe({
      next: (res) => {
        this.listofchannel = res;

        console.log(this.listofchannel)
      }

    })



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
  }





  ReportChannel: FormGroup = new FormGroup({
    content: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });




  RepChannel() {
    //this.channel.Report('any content','2024-01-06T08:51:16.890Z', this.chanId,'ant status');
    console.log('this.chanId', this.chanId);
    let currentDate: Date = new Date();
    console.log('date', currentDate);
    let myObj: any = {
      content: this.ReportChannel.get('content')?.value,
      dtaeofsend: currentDate,
      channelid: this.chanId,
      status: this.ReportChannel.get('status')?.value

    }
    //  console.log('obj',myObj);

    this.channel.createNewReport(myObj).subscribe({
      next: () => {
        this.spinner.hide();
        this.toaster.success('report send')
      },
      error: (error) => {
        console.error('Error creating report', error);
        this.spinner.hide();
        this.toaster.error('Error creating report', 'Error');
      }


    })
    // window.location.reload();


  }

  createReport(channelId: string): void {

    console.log('Dialog opened');
    this.chanId = channelId;

    const dialogRef = this.dialog.open(this.callReportChannelDialog);
    console.log('ChannelID', channelId);
    console.log('chanId', this.chanId);
    this.ReportChannel.reset();

    //Report( content: any,dtaeofsend:any,channelid: any,status:any)

    // this.ReportChannel

  }
}
