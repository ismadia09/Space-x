import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { DetailedCapsuleDataList } from '../../app/Models/DetailedCapsuleDataList';

/**
 * Generated class for the DetailedCapsuleDataListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-capsule-data-list',
  templateUrl: 'detailed-capsule-data-list.html',
})
export class DetailedCapsuleDataListPage {

  detailedCapsuleDataList: DetailedCapsuleDataList[];
  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllDetailedCapsuleData().subscribe(data => {
      this.detailedCapsuleDataList = data
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedCapsuleDataListPage');
  }

}
