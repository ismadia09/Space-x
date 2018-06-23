import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch, Core, Payload } from '../../app/Models/Launch';

/**
 * Generated class for the DetailLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-launch',
  templateUrl: 'detail-launch.html',
})
export class DetailLaunchPage {

  launch: Launch
  isRocketExpand: boolean = false
  cores: Core[]
  payloads: Payload[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launch = navParams.get('launch');
    this.cores = this.launch.rocket.first_stage.cores
    this.payloads = this.launch.rocket.second_stage.payloads
    console.log(this.launch)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailLaunchPage');
  }

  didClickLaunchSite(launch){
    console.log("didClickLaunchSite")
  }

  didClickExpandRocket(){
    this.isRocketExpand = !this.isRocketExpand
  }

}
