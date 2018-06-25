import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyHistory } from '../../app/Models/CompanyHistory';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Cordova, cordovaWarn } from '@ionic-native/core';

/**
 * Generated class for the CompanyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-history',
  templateUrl: 'company-history.html',
})
export class CompanyHistoryPage {

  companyHistory : CompanyHistory[] ;
  url : string;
  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getCompanyHistoryInfo().subscribe(data => {
      this.companyHistory = data;
    })
  }
  goExternalUri(uri : string){
    window.open(uri,'_system')
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyHistoryPage');
  }


}
