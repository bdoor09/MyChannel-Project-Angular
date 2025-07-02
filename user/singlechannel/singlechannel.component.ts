import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subchannel } from 'src/app/Interface/subchannel';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelService } from 'src/app/services/channel.service';
import { ChannelsubService } from 'src/app/services/channelsub.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singlechannel',
  templateUrl: './singlechannel.component.html',
  styleUrls: ['./singlechannel.component.css']
})
export class SinglechannelComponent implements OnInit {
  route: any;
  constructor(public user: UserService, private _route: ActivatedRoute, public channel: ChannelService, public auth: AuthService
    , public chaanelsub: ChannelsubService, private rout: Router) { }

  btnSubscribe: string = 'Login to subscripe';
  userinfo: any;
  channelid: string = '';

  channelgetid: any;
  hasPayment: string ="";

  sub() {
    // this.chanelsub.GetNumbeUserSub
    this.userinfo = this.auth.userdata.getValue()
    this.hasPayment = localStorage.getItem('hasPayment') || 'false';
    let usersubid = this.userinfo.userid
    console.log()
    this.chaanelsub.GetNumbeUserSub(usersubid).subscribe({
      next: (rep) => {

        if (this.btnSubscribe === 'Subscribe') {

          if (rep >= 3 && this.hasPayment == "false") {
            console.log('gretaer than 3')
            // this.route.navigate(['/contact'])
            this.rout.navigate(['/payment'])
          }
          else {
            let sub: Subchannel = {
              subuserid: +this.userinfo.userid,
              channelid: +this.channelid
            }
            this.chaanelsub.createChannelSub(sub).subscribe({
              next: () => {
                console.log('success');
                this.btnSubscribe = 'UnSubscribe';
              }
            })
          }


        }
        else {
          this.channel.DeleteSubscription(+this.channelid, +this.userinfo.userid).subscribe({
            next: () => {
              this.btnSubscribe = 'Subscribe';
            }
          });
        }


        // if (rep >= 1) {
        //   //payment rout
        //   console.log('gretaer than 3')
        // }

      }

    })


  }



  ngOnInit(): void {

    this.channelid = this._route.snapshot.params['id'];
    this.channel.GetChannelById(this.channelid).subscribe({

      next: (res) => {
        this.channelgetid = res
      }

    })





    this.userinfo = this.auth.userdata.getValue();

    let body1: any = {
      subuserid: this.userinfo.userid,
      channelid: this.channelid
    }

    //console.log('check sub',body1 );

    this.channel.CheckSubscribtion(body1).subscribe({
      next: (res) => {
        console.log('true or false', res);

        // if (!res) {
        if (res == true) {
          this.btnSubscribe = 'UnSubscribe'

        }
        else {
          this.btnSubscribe = 'Subscribe'
        }

      }
    })

  }



  opensUservideo(channelid: number) {

    this.rout.navigate(['userviedo', channelid]);
  }


}
