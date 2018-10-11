import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from '../model/item';
import { ITEMS } from '../mock/items';
import { Preferences } from '../model/preferences';

@Injectable()
export class ItemService {

    items: Item[];

    constructor() {
        this.items = [];
    }

    getItems(): Observable<Item[]> {
        return of(ITEMS);
    }

    getItems2() {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                Name: 'Item ' + i,
                Description: 'This is item #' + i,
                Images: ["../../assets/imgs/logo.png", ""],
                DateOfCreate: ""
            });
        }
        return of(this.items);
    }

    preferenceGetFromStorage() {
        let pref: Preferences = JSON.parse(sessionStorage.getItem("preferences"));
        if (pref == null || pref == undefined) {
            return new Preferences();
        }
        return pref;
    }

    getPreferences() {
        return of(this.preferenceGetFromStorage());
    }

    setPreferences(pref: Preferences) {
        sessionStorage.setItem("preferences", JSON.stringify(pref));
    }
}