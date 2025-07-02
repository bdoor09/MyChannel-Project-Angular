import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-managecontact',
  templateUrl: './managecontact.component.html',
  styleUrls: ['./managecontact.component.css']
})
export class ManagecontactComponent implements OnInit {
  @ViewChild('calingdeleteContactdialog') calldeletecontact !: TemplateRef<any>



  constructor(public home: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.home.GetAllContact();
  }



  DeleteContact(id: number) {
    const dialogRef = this.dialog.open(this.calldeletecontact);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this.home.DeletContact(id);

      }
      else {
        console.log('Thank you');
      }
    })


  }



}
