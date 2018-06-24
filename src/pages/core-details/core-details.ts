import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Core } from '../../app/Models/Core';

/**
 * Generated class for the CoreDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-details',
  templateUrl: 'core-details.html',
})
export class CoreDetailsPage {
  coredet: Core;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coredet = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreDetailsPage');
  }

}
