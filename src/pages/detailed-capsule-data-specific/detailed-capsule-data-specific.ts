import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { DetailedCapsuleDataSpecific } from '../../app/Models/DetailedCapsuleDataSpecific';


/**
 * Generated class for the DetailedCapsuleDataSpecificPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-capsule-data-specific',
  templateUrl: 'detailed-capsule-data-specific.html',
})
export class DetailedCapsuleDataSpecificPage {
 specificDetail : DetailedCapsuleDataSpecific
 constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
  this.spacexApi.getSpecificDetailedCapsuleData(this.specificDetail.capsule_id).subscribe(data => {
    this.specificDetail = data;
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedCapsuleDataSpecificPage');
  }

}
