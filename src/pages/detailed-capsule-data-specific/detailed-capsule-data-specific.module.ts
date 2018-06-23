import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedCapsuleDataSpecificPage } from './detailed-capsule-data-specific';

@NgModule({
  declarations: [
    DetailedCapsuleDataSpecificPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedCapsuleDataSpecificPage),
  ],
})
export class DetailedCapsuleDataSpecificPageModule {}
