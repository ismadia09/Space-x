import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyHistoryPage } from './company-history';

@NgModule({
  declarations: [
    CompanyHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyHistoryPage),
  ],
})
export class CompanyHistoryPageModule {}
