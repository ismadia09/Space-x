import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Core } from '../../app/Models/Launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CoreDetailsPage } from '../core-details/core-details';
import { core } from '@angular/compiler';

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

  cores: Core[];
  tmp_cores: Core[];
  isMissionsExpand: boolean = false
  searchString: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllCore().subscribe(data =>{
      this.cores = data;
      this.tmp_cores = data;
    })
  
    }

  onInput($event){
    console.log($event)
    console.log(this.searchString);
  

    this.cores = this.tmp_cores

    if(this.searchString == ''){
      this.cores = this.tmp_cores
      console.log("reset");
      return
    }

    let key = this.searchString.split(' ')[0]
    key = key.replace(' ', '');
    key = key.trim();

    if (key == "mission" && this.searchString.split(' ').length > 1 ){
      let newSearch = this.searchString.split(' ')[1];
      newSearch = newSearch.replace(' ', '');
      newSearch = newSearch.trim();
      
      console.log("new search = "+newSearch);
      

      this.cores = this.tmp_cores.filter((core) => {
        
        for (let i = 0; i < core.missions.length; i++) {
          const element = core.missions[i];
          return (element.toLowerCase().indexOf(newSearch.toLowerCase()) > -1)          
        }

      })

    } else {
      console.log("else searchString = " + this.searchString);

      this.cores = this.tmp_cores.filter((core) => {
        return (core.core_serial.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
      })
    }
    
  }

  onCancel($event){
    console.log($event)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreListPage');
  }

  didClickExpandMissions(){
    this.isMissionsExpand = !this.isMissionsExpand
  }

  goToDetails(core: Core){
    this.navCtrl.push(CoreDetailsPage, core);
  }

}
