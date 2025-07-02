
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelService } from 'src/app/services/channel.service';
import { HomeService } from 'src/app/services/home.service';
 
@Component({
  selector: 'app-createchannel',
  templateUrl: './createchannel.component.html',
  styleUrls: ['./createchannel.component.css']
})
export class CreatechannelComponent implements OnInit {
  constructor(
    public home: HomeService,
    private router: Router,
    private auth: AuthService,
    public channel: ChannelService
  ) {}
 
  userdetails: any;
  userinfo: any = {};
 
  channelName: FormControl = new FormControl('', Validators.required);
  description: FormControl = new FormControl('', Validators.required);
  imageName: FormControl = new FormControl('', Validators.required);
  userid: FormControl = new FormControl('', Validators.required);
  backimage: FormControl = new FormControl('', Validators.required);
 
  ngOnInit(): void {
    this.userinfo = this.auth.userdata.getValue();
  }
 
  save() {
    this.userid.setValue(this.userinfo.userid);
    const formData = {
      channelName: this.channelName.value,
      description: this.description.value,
      imageName: this.imageName.value,
      userid: this.userid.value,
      backimage: this.backimage.value
    };
    this.channel.CreateChannel(formData);
  }
 
  uploadImage(file: any) {
    if (file.length === 0) return;
    const fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.channel.uploadChannelImage(formData);
  }
 
  uploadImage2(file: any) {
    if (file.length === 0) return;
    const fileToUpload = file[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.channel.uploadChannelbackImage(formData);
  }


}