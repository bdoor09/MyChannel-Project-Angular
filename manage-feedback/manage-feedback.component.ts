import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-manage-feedback',
  templateUrl: './manage-feedback.component.html',
  styleUrls: ['./manage-feedback.component.css']
})
export class ManageFeedbackComponent {
  @ViewChild('calingdeleteFeedbacksialog') calldeleteFeedback !: TemplateRef<any>
  constructor(public home: HomeService, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.home.GetAllFeedback();
  }



  DeleteFeedback(id: number) {
    const dialogRef = this.dialog.open(this.calldeleteFeedback);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this.home.DeletFeedback(id);
      }
      else {
        console.log('Thank you');
      }
    });
  }

}
