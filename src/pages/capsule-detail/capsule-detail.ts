import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-detail',
  templateUrl: 'capsule-detail.html',
})
export class CapsuleDetailPage {

  capsule: Capsule
  capsInfos: CapsInfo[]

  isDiameterEx: boolean
  isHeatShieldEx: boolean
  isHeight_w_trunkdEx: boolean
  islaunch_payload_mass: boolean
  isLaunch_payload_vol: boolean
  isReturn_payload_mass: boolean
  isReturn_payload_vol: boolean
  isCapsInfoEx: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.capsule = navParams.get('capsule');
      
    this.spacexApi.getCapsInfo(this.capsule.id).subscribe(data => {
      console.log(data);
      this.capsInfos=data
    })
    
    console.log(this.capsule)
  }


  didClickDiameter(){
    this.isDiameterEx = !this.isDiameterEx
  }

  didClickHeatShield(){
    this.isHeatShieldEx = !this.isHeatShieldEx
  }

  didClickHeight_w_trunkd(){
    this.isHeight_w_trunkdEx = !this.isHeight_w_trunkdEx
  }

  didClickLaunch_payload_mass() { 
    this.islaunch_payload_mass = !this.islaunch_payload_mass
  }

  didClickLaunch_payload_vol() {
    this.isLaunch_payload_vol = !this.isLaunch_payload_vol
   }

  didClickReturn_payload_mass() {
    this.isReturn_payload_mass = !this.isReturn_payload_mass
   }

  didClickReturn_payload_vol() {
    this.isReturn_payload_vol = !this.isReturn_payload_vol
   }
  
  didClickCapsInfo(){
     this.isCapsInfoEx = !this.isCapsInfoEx
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleDetailPage');
  }

}
