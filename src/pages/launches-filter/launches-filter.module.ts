import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesFilterPage } from './launches-filter';

@NgModule({
  declarations: [
    LaunchesFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesFilterPage),
  ],
})
export class LaunchesFilterPageModule {}
