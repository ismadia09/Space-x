import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/Models/Launch';
import { DetailLaunchPage } from '../detail-launch/detail-launch';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';


/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  launches: Launch[]
  nextLaunch: Launch

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunches().subscribe(data => {
      console.log("getAllLaunches")
      this.launches = data
    })

    this.spacexApi.getNextLaunch().subscribe(data=>{
      this.nextLaunch = data
      console.log("getNextLaunch")
      console.log(data)
    })
  }


  /** Cells methodes */
  didClickLaunch(launch){


    this.navCtrl.push(DetailLaunchPage, { launch: launch })
  }

  didClickVideo(launch){
    console.log(launch.links.video_link)
  }

  didClickLaunchSite(launch){
     

  }

  didClickLaunchSite(launch){
    //this.navCtrl.push(LaunchpadDetailPage, { id: launch.site_id })
    console.log(`${launch.site_id}`);
    this.navCtrl.push(LaunchpadDetailPage, launch)


  }

  didClickRocket(launch){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
