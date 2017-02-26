"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_1 = require('./item');
var itemservice_service_1 = require('./itemservice.service');
var AddItemComponent = (function () {
    function AddItemComponent(itemService) {
        this.itemService = itemService;
        this.item = {
            id: null,
            name: '',
            categories: [],
            description: '',
            price: null,
            owner: 'Nicholas Jativa',
            location: 'Stony Brook',
            imgUrl: ''
        };
    }
    AddItemComponent.prototype.addItem = function () {
        var _this = this;
        this.item.categories.push(this.category);
        this.itemService.createItem(this.item)
            .then(function () { return _this.item = {
            id: null,
            name: '',
            categories: [],
            description: '',
            price: null,
            owner: 'Nicholas Jativa',
            location: 'Stony Brook',
            imgUrl: ''
        }; });
        this.category = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddItemComponent.prototype, "category", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], AddItemComponent.prototype, "item", void 0);
    AddItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-item',
            templateUrl: './add-item.component.html',
            styleUrls: ['./add-item.component.css']
        }), 
        __metadata('design:paramtypes', [itemservice_service_1.ItemService])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=add-item.component.js.map