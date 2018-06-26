import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Core } from '../../app/Models/Launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CoreDetailsPage } from '../core-details/core-details';

/**
 * Generated class for the CoreListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-list',
  templateUrl: 'core-list.html',
})
export class CoreListPage {

  core: Core[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllCore().subscribe(data =>{
      this.core = data;
    })
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreListPage');
  }

  goToDetails(core: Core){
    this.navCtrl.push(CoreDetailsPage, core);
  }

}
