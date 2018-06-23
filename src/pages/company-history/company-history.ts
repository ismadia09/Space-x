import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyHistory } from '../../app/Models/CompanyHistory';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

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

  companyHistory : CompanyHistory ;
  myDate : Date;
  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getCompanyHistoryInfo().subscribe(data => {
      this.companyHistory = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyHistoryPage');
  }

}
