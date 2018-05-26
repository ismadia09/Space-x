import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchpadDetails } from '../../app/Models/LaunchpadDetails';
import { Launch } from '../../app/Models/Launch';

/**
 * Generated class for the LaunchpadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-detail',
  templateUrl: 'launchpad-detail.html',
})
export class LaunchpadDetailPage {
  launch : Launch;
  launchpadDetails : LaunchpadDetails;

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.launch = this.navParams.data;
    this.spacexApi.getLaunchpadDetails(this.launch.launch_site.site_id).subscribe(data => {
      this.launchpadDetails = data;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailPage');
  }

}
