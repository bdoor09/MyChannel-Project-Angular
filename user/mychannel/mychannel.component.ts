import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelsubService } from 'src/app/services/channelsub.service';

@Component({
  selector: 'app-mychannel',
  templateUrl: './mychannel.component.html',
  styleUrls: ['./mychannel.component.css']
})
export class MychannelComponent  {
constructor(private chanelsub:ChannelsubService,private auth:AuthService,private rout:Router){}
userinfo:any;

  sub(){
    // this.chanelsub.GetNumbeUserSub
    this.userinfo=this.auth.userdata.getValue()

    let usersubid = this.userinfo.userid
    this.chanelsub.GetNumbeUserSub(usersubid).subscribe({
      next:(rep)=>{
        if(rep>3){
          //payment rout
          this.rout.navigate(['contact'])
          console.log('gretaer than 3')
          

        }
        else{
          console.log('less than 3')

        }
      }

    })
 

  }

}
