import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedCapsuleDataSpecificPage');
  }

}
