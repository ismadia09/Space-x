import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyInfo } from '../../app/Models/CompanyInfo';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CompanyHistoryPage } from '../company-history/company-history';

/**
 * Generated class for the CompanyDataInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-data-info',
  templateUrl: 'company-data-info.html',
})
export class CompanyDataInfoPage {

  companyInfo : CompanyInfo;
  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getCompanyInfo().subscribe(data => {
      this.companyInfo = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDataInfoPage');
  }

  didClickHistory(){
    this.navCtrl.push(CompanyHistoryPage)
  }

}
