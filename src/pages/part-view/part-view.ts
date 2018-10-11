import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Item } from '../../model/item';

/**
 * Generated class for the PartViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-part-view',
  templateUrl: 'part-view.html',
})
export class PartViewPage {
  @Input() item: Item; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartViewPage');
  }

  onFulviewClick(){
    this.navCtrl.push(DetailPage, {item: this.item
    });
  }
}
