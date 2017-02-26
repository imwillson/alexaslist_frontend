import { Component, Input } from '@angular/core';

import { Item } from './item';
import { ItemService } from './itemservice.service';

@Component({
    moduleId: module.id,
    selector: 'add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
    @Input() private category: string;
    constructor(private itemService: ItemService) {
    }

    @Input() private item: Item = {
        id: null,
        name: '',
        categories: [],
        description: '',
        price: null,
        owner: 'Nicholas Jativa',
        location: 'Stony Brook',
        imgUrl: ''
    };

    addItem(): void {
        this.item.categories.push(this.category);
        this.itemService.createItem(this.item)
            .then(() => this.item = {
                id: null,
                name: '',
                categories: [],
                description: '',
                price: null,
                owner: 'Nicholas Jativa',
                location: 'Stony Brook',
                imgUrl: ''
        });
        this.category = '';
    }
}