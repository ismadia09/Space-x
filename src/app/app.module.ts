import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { RocketsPage} from '../pages/rockets/rockets'
import { RocketsDetailsPage } from '../pages/rockets-details/rockets-details'
import { CoreListPage } from '../pages/core-list/core-list';
import { CoreDetailsPage } from '../pages/core-details/core-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    LaunchListPage,
    RocketsPage,
    RocketsDetailsPage,
    CoreListPage,
    CoreDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LaunchListPage,
    RocketsPage,
    RocketsDetailsPage,
    CoreListPage,
    CoreDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}
