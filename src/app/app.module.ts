import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { DetailLaunchPage } from '../pages/detail-launch/detail-launch';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { CapsuleDetailPage } from '../pages/capsule-detail/capsule-detail';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { LaunchpadDetailPage } from '../pages/launchpad-detail/launchpad-detail';
import { DetailedCapsuleDataListPage } from '../pages/detailed-capsule-data-list/detailed-capsule-data-list';
import { DetailedCapsuleDataSpecificPage } from '../pages/detailed-capsule-data-specific/detailed-capsule-data-specific';
import { CompanyDataInfoPage } from '../pages/company-data-info/company-data-info';
import { CompanyHistoryPage } from '../pages/company-history/company-history';


@NgModule({
  declarations: [
    MyApp,
    LaunchListPage,
    CapsuleListPage,
    DetailLaunchPage,
    CapsuleDetailPage,
    LaunchpadListPage,
    LaunchpadDetailPage, 
    DetailedCapsuleDataListPage,
    DetailedCapsuleDataSpecificPage,
    CompanyDataInfoPage,
    CompanyHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    LaunchListPage,
    CapsuleListPage,
    DetailLaunchPage,
    CapsuleDetailPage,
    LaunchpadListPage,
    LaunchpadDetailPage, 
    DetailedCapsuleDataListPage,
    DetailedCapsuleDataSpecificPage,
    CompanyDataInfoPage,
    CompanyHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}
