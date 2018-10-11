import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ItemService } from '../../services/item';
import { Preferences } from '../../model/preferences';

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage implements OnInit {

preferences: any;

  constructor(public navCtrl: NavController, private service: ItemService ) {
  }

  ngOnInit(): void {
    this.service.getPreferences().subscribe(pref => this.preferences = pref);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }
}
