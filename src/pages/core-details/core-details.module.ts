import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoreDetailsPage } from './core-details';

@NgModule({
  declarations: [
    CoreDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoreDetailsPage),
  ],
})
export class CoreDetailsPageModule {}
