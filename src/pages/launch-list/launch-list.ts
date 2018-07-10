import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/Models/Launch';
import { DetailLaunchPage } from '../detail-launch/detail-launch';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';
import { RocketsDetailsPage } from '../rockets-details/rockets-details';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';



/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
    providers: [Keyboard]
})
export class LaunchListPage {


  launches: Launch[]
  tmp_launches: Launch[]
  nextLaunch: Launch
  countDownNum: string
  searchString: string
  isShowNext:boolean = true
  sortButtonName: string = "all"
  isAsc: boolean = true

  constructor(private navCtrl: NavController, private keyboard: Keyboard, private navParams: NavParams, public alertCtrl: AlertController,  private spacexApi: SpacexApiProvider, private localNotifications: LocalNotifications) {
    
    this.spacexApi.getAllLaunches().subscribe(data => {
      console.log("getAllLaunches")
      this.launches = data
      this.tmp_launches = data
      this.sortFunc()
    })

    this.spacexApi.getNextLaunch().subscribe(data=>{
      this.nextLaunch = data
      console.log("getNextLaunch")
      console.log(data)
    })

    //setInterval(this.countDownFunc, 1000);
    setInterval(() => this.countDownFunc(), 1000);

  }

  sortingIt(){
    this.isAsc = !this.isAsc
    this.sortFunc()
  }

  sortFunc(){
    if (this.isAsc) {
      this.launches.sort((n1, n2) => {
        if (n1.launch_year < n2.launch_year) {
          return 1;
        }
        if (n1.launch_year > n2.launch_year) {
          return -1;
        }
        return 0;
      })
    } else {
      this.launches.sort((n1, n2) => {
        if (n1.launch_year > n2.launch_year) {
          return 1;
        }
        if (n1.launch_year < n2.launch_year) {
          return -1;
        }
        return 0;
      })
    }
  }

  onSegmentChange(){
    console.log("onSegmentChange");
    console.log(this.sortButtonName);
    
    this.searchString == ''

    if (this.sortButtonName == "all") {
      this.launches = this.tmp_launches
    } else if (this.sortButtonName == "success") {
      
      this.launches = this.tmp_launches.filter((launch) => {
        return launch.launch_success == true
      })
      
    } else if (this.sortButtonName == "fail") {
      this.launches = this.tmp_launches.filter((launch) => {
        return launch.launch_success == false
      })
    }

    this.sortFunc()
    
  }

  onSearch(event) {
    this.keyboard.close();
  }

  onInput($event) {
    console.log($event)
    console.log(this.searchString);

    this.launches = this.tmp_launches

    if (this.searchString == '') {
      this.launches = this.tmp_launches
      console.log("reset");

      if (this.launches.length == this.tmp_launches.length) {
        this.isShowNext = true
      } else {
        this.isShowNext = false
      }

      return
    }

    let searchArr = this.searchString.split(' ')
    let key = searchArr.shift()
    key = key.replace(' ', '');
    key = key.trim();
    console.log("key = " + key);
    console.log("sr = " + searchArr.length);

    if (key == "site" && searchArr.length >= 1) {
      let newSearch = searchArr.join(" ");
      newSearch = newSearch.trim();

      console.log("new search = " + newSearch);

      this.launches = this.tmp_launches.filter((launch) => {
        return (launch.launch_site.site_name.toLowerCase().indexOf(newSearch.toLowerCase()) > -1)
      })

    } 

    else if (key == "rocket" && searchArr.length >= 1){
      let newSearch = searchArr.join(" ");
      newSearch = newSearch.trim();

      console.log("new search = " + newSearch);

      this.launches = this.tmp_launches.filter((launch) => {
        return (launch.rocket.rocket_name.toLowerCase().indexOf(newSearch.toLowerCase()) > -1)
      })
    }
    
    else {
      console.log("else searchString = " + this.searchString);
      this.launches = this.tmp_launches.filter((launch) => {
        return (launch.mission_name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
      })

    }
    
    this.sortFunc()

    if (this.launches.length == this.tmp_launches.length) {
      this.isShowNext = true
    } else {
      this.isShowNext = false
    }

  }

  onCancel($event) {
    console.log($event)
    this.keyboard.close();
  } 


  didWantNotif(){
    console.log("didWantNotif");

    let alert = this.alertCtrl.create();
    alert.setTitle('Get Notification:');

    alert.addInput({
      type: 'radio',
      label: '10 seconds for testing',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '10 minutes before',
      value: '10',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '30 minutes before',
      value: '30',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '1 hour before',
      value: '60',
      checked: false
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {

        console.log(data)

        if(data==1){
          this.localNotifications.schedule({
            text: 'Wahou it\'s the big time!',
            trigger: { at: new Date(new Date().getTime() + 10000) },
            led: 'FF0000',
            sound: null
          });
        }
        

      }
    });
    alert.present();

    
    
  }


  countDownFunc(){

    if (this.nextLaunch){
      let date_string = this.nextLaunch.launch_date_local
      let dateTo = new Date(date_string)
      let dateFrom = new Date()
      let comp = dateTo.getTime() - dateFrom.getTime()
      
      var minutes = Math.floor(comp / 60000);
      var hours = minutes / 60;

      if (hours > 1) {
        var min_extract = hours.toString().split(".")[1]
        if (min_extract){
          var min_final = min_extract.substring(0, 2);
        }
      }


      var seconds = ((comp % 60000) / 1000).toFixed(0);
      //return parseInt(hours) + ":" + min_final + ":" + (seconds < 10 ? '0' : '') + seconds;

      this.countDownNum = hours.toFixed(0).toString() + ":" + min_final.toString() + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds
    }
  }

  /** Cells methodes */
  didClickLaunch(launch){
    console.log("didClickLaunch");
    this.navCtrl.push(DetailLaunchPage, { launch: launch })
  }

  didClickVideo(launch){
    console.log(launch.links.video_link)
    window.open(launch.links.video_link, '_system')
  }


  didClickLaunchSite(launch){
    console.log("didClickLaunchSite");
    this.navCtrl.push(LaunchpadDetailPage, launch)
  }

  didClickRocket(launch){
    console.log("didClickRocket");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
