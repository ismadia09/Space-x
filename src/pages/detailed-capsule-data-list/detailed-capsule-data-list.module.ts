import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedCapsuleDataListPage } from './detailed-capsule-data-list';

@NgModule({
  declarations: [
    DetailedCapsuleDataListPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedCapsuleDataListPage),
  ],
})
export class DetailedCapsuleDataListPageModule {}
