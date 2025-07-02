import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ChannelService } from 'src/app/services/channel.service';
import { ChannelsubService } from 'src/app/services/channelsub.service';
import { NotifyService } from 'src/app/services/notify.service';
import { PaymentServiceService } from 'src/app/services/paymentService/payment-service.service';
import { ReportService } from 'src/app/services/report.service';



@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.css']
})
export class ManageReportsComponent {

  _startDate: string = '';
  _endDate: string = '';

  startDate: string = '';
  endDate: string = '';

  ReopId: string = '';

  notifyid: string = '';

  lispaymentuser: any[] = [];


  constructor(public dialog: MatDialog,
    public report: ReportService,
    public channel: ChannelService,
    public notify: NotifyService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    public pay: PaymentServiceService,
    public chanelsub: ChannelsubService) { }

  @ViewChild('table', { static: false }) table!: ElementRef;
  @ViewChild('callCreateNotifylDialog') callCreateNotifylDialog!: TemplateRef<any>;
  @ViewChild('calingdeleteReportlog') calldeleteReport !: TemplateRef<any>
  @ViewChild('calingdeleteNotfiylog') calldeleteNotify !: TemplateRef<any>

  //  isNotificationActive: boolean = false;

  ngOnInit(): void {
    this.channel.GetAllReportOnChannel();
    this.chanelsub.getNumberOfChannelSub();


    this.pay.getAllUserPaument().subscribe({
      next: (resp) => {
        this.lispaymentuser = resp;
        console.log(this.lispaymentuser)
      }

    })
  }


  //Delte Report
  DeleteRepor(id: number) {
    const dialogRef = this.dialog.open(this.calldeleteReport);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this.report.DeletRepor(id);
      }
      else {
        console.log('Thank you');
      }
    })
  }




  //Delte Notifucation
  DeleteNotification(rid: number) {
    const dialogRef = this.dialog.open(this.calldeleteNotify);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this.notify.DeleteNotificationByRid(rid);
        // this.isNotificationActive = false;

      }
      else {
        console.log('Thank you');
      }
    })
  }




  //CreateNotification
  CreateNotify: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
    dtaeOfSend: new FormControl('', Validators.required),
    reportId: new FormControl(),

  })


  NotifySend() {
    console.log('this.rId', this.ReopId);
    let currentDate: Date = new Date();
    console.log('date', currentDate);
    let myObj: any = {
      message: this.CreateNotify.get('message')?.value,
      dtaeOfSend: currentDate,
      reportId: this.ReopId,

    }

    this.notify.createNewNotification(myObj).subscribe({
      next: () => {
        console.log('Successfully created notification');
        this.spinner.hide();
        this.toaster.success('Notification created successfully', 'Success');
      },
      error: (error) => {
        console.error('Error creating notification', error);
        this.spinner.hide();
        this.toaster.error('Error creating notification', 'Error');
      }
    });
  }



  CreateNotification(P_RepotId: string): void {
    console.log('Dialog opened');
    this.ReopId = P_RepotId;
    const dialogRef = this.dialog.open(this.callCreateNotifylDialog);

    console.log('ChannelID', P_RepotId);
    console.log('chanId', this.ReopId);
    this.CreateNotify.reset();
  }

  //CreateNotification



  //downloadAsPDF file
  downloadAsPDF() {
    const element: HTMLElement = this.table.nativeElement;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('table.pdf');
    });
  }




}
