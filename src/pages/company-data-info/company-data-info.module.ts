import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyDataInfoPage } from './company-data-info';

@NgModule({
  declarations: [
    CompanyDataInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyDataInfoPage),
  ],
})
export class CompanyDataInfoPageModule {}
