import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchListPage } from '../launch-list/launch-list';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the LaunchesFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launches-filter',
  templateUrl: 'launches-filter.html',
})
export class LaunchesFilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public spacexApi: SpacexApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchesFilterPage');
  }

  didClickFilterBySuccess(){
    let launches = this.spacexApi.getLaunchesFilteredBySuccess()
   
  }

}
