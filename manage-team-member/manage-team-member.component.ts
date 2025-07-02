import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/services/home.service';
import { CreateteamemComponent } from '../createteamem/createteamem.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-team-member',
  templateUrl: './manage-team-member.component.html',
  styleUrls: ['./manage-team-member.component.css']
})
export class ManageTeamMemberComponent implements OnInit {
  @ViewChild('calingdeleteTeamialog') calldeleteTeam !: TemplateRef<any>
  @ViewChild('callUpdateTeamDialog') callUpdateTeamDialog !: TemplateRef<any>


  updateTeam: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    membername: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // homeid : new FormControl ('',Validators.required),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    linkedin: new FormControl('', Validators.required),
    imagename: new FormControl('', Validators.required),
  })

  constructor(public home: HomeService, public dialog: MatDialog, public user: UserService) { }
  ngOnInit(): void {

    this.home.GetAllTeammembers();
    this.user.GetNuberOfuser();
  }





  createteammembers() {
    this.dialog.open(CreateteamemComponent)
  }

  pTeamData: any;
  openUpdateTeamDailog(obj: any) {
    this.pTeamData = obj;
    console.log(this.pTeamData);
    this.updateTeam.controls['id'].setValue(this.pTeamData.id);
    this.home.display_imageTeam = this.pTeamData.imageanme;
    this.dialog.open(this.callUpdateTeamDialog);
  }
  updateteam() {
    debugger;
    this.home.UpdateTeammembers(this.updateTeam.value);
  }


  DeleteTeam(id: number) {
    const dialogRef = this.dialog.open(this.calldeleteTeam);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this.home.DeletTeammembers(id);

      }
      else {
        console.log('Thank you');
      }
    })


  }


  uploadImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0]
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.home.uploadAttachment(formData);

  }


}
