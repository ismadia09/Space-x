import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { DetailedCapsuleDataListPage } from '../pages/detailed-capsule-data-list/detailed-capsule-data-list';
import { DetailedCapsuleDataSpecificPage } from '../pages/detailed-capsule-data-specific/detailed-capsule-data-specific';
import { CompanyDataInfoPage } from '../pages/company-data-info/company-data-info';
import { RocketsPage } from '../pages/rockets/rockets';
import { CoreListPage } from '../pages/core-list/core-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LaunchListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Launches', component: LaunchListPage },
      { title: 'Capsules', component: CapsuleListPage },
      { title: 'Company Info', component: CompanyDataInfoPage},
      { title: 'Launchpad Infos', component: LaunchpadListPage },
      { title: 'Detailed Capsule Data List', component: DetailedCapsuleDataListPage },
      { title: 'Rockets', component: RocketsPage },
      { title: 'Core', component : CoreListPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
