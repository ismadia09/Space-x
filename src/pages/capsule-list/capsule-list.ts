import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CapsuleDetailPage } from '../capsule-detail/capsule-detail';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {

  capsules: Capsule[]

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    
    this.spacexApi.getAllCapsules().subscribe(data => {
      console.log("getAllCapsules")
      this.capsules = data
      console.log(data);
    })

    console.log("init")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }
  
  didClickCaps(capsule){
    this.navCtrl.push(CapsuleDetailPage, { capsule: capsule })
  }

}
