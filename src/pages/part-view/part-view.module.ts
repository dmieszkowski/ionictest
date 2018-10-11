import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartViewPage } from './part-view';

@NgModule({
  declarations: [
    PartViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PartViewPage),
  ],
})
export class PartViewPageModule {}
