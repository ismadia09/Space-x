import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/Models/Rocket';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketsDetailsPage } from '../rockets-details/rockets-details';

/**
 * Generated class for the RocketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rockets',
  templateUrl: 'rockets.html',
})
export class RocketsPage {

  rockets: Rocket[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
  this.spacexApi.getAllRockets().subscribe(data =>{
    this.rockets = data;
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketsPage');
  }

  goToDetails(rockets: Rocket){
    this.navCtrl.push(RocketsDetailsPage, rockets);
  }

}
