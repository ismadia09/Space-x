import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/Models/Rocket';

/**
 * Generated class for the RocketsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rockets-details',
  templateUrl: 'rockets-details.html',
})
export class RocketsDetailsPage {
  rockets: Rocket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.rockets = this.navParams.data;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketsDetailsPage');
  }

}
