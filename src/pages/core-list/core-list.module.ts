import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoreListPage } from './core-list';

@NgModule({
  declarations: [
    CoreListPage,
  ],
  imports: [
    IonicPageModule.forChild(CoreListPage),
  ],
})
export class CoreListPageModule {}
