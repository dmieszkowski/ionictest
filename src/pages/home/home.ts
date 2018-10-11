import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddItemPage } from '../add-item/add-item';
import { PreferencesPage } from '../preferences/preferences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages = [
    { title: 'Add item', component: AddItemPage, ico: "add" },
    { title: 'List', component: ListPage, ico: "globe" },
    { title: 'Favorite', component: ListPage, ico: "heart" },
    { title: 'My preferences', component: PreferencesPage, ico: "options" }
  ];

  constructor(public navCtrl: NavController) {
  }

  onSearchChange(event){

  }

  onPageClick(page){
    this.navCtrl.push(page.component);
  }
}
