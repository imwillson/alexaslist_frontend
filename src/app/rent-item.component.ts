import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rent-item',
    templateUrl: './rent-item.component.html',
    styleUrls: [ './rent-item.component.css' ]
})

export class RentItemComponent {
    @Input() private name: String;
    @Input() private price: number;
    @Input() private description: String;
    @Input() private imgUrl: String;

    constructor() {
    }
}