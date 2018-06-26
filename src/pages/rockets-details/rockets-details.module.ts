import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RocketsDetailsPage } from './rockets-details';

@NgModule({
  declarations: [
    RocketsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RocketsDetailsPage),
  ],
})
export class RocketsDetailsPageModule {}
