import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchpadInfos } from '../../app/Models/LaunchpadInfos';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {

  launchpadInfos: LaunchpadInfos[];
  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunchpadInfos().subscribe(data => {
      this.launchpadInfos = data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  didClickLaunchSite(launch){
    //this.navCtrl.push(LaunchpadDetailPage, { id: launch.site_id })
    //console.log(`${launch.site_id}`);
    this.navCtrl.push(LaunchpadDetailPage, launch)

  }

}
