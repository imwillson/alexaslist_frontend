import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './itemservice.service';
import { RentItemComponent } from './rent-item.component';

@Component({
    moduleId: module.id,
    selector: 'items',
    templateUrl: './items.component.html',
    styleUrls: [ './items.component.css' ]
})

export class ItemsComponent implements OnInit {
    private items: Array<Item>;
    constructor(private itemService: ItemService) {
        
    }

    ngOnInit(): void {
        this.itemService.getItems().then(items => this.items = items);
    }
}