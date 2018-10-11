import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../model/item';
import { ItemService } from '../../services/item';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  selectedItem: any;
  icons: string[];
  items: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private itemService: ItemService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
  }

  ngOnInit() {
    this.items = [];
    this.getItems();
  }

  getItems() {
    this.itemService.getItems2().subscribe(items=>this.items = items);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.itemService.getItems2().subscribe(items=>this.items = items);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
