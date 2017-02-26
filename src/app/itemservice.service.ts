import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class ItemService {
    private itemsUrl = 'http://localhost:8080/api/items';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred: ', error);
        return Promise.reject(error.message || error);
    } 

    createItem(item: Item): Promise<Item> {
        return this.http    
            .post(this.itemsUrl, JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json() as Item[])
            .catch(this.handleError);
    }    

    getItem(id: number): Promise<Item> {
        const url = `${this.itemsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Item)
            .catch(this.handleError);
    }

    updateItem(item: Item): Promise<Item> {
        const url = `${this.itemsUrl}/${item.id}`;
        return this.http
            .put(url, JSON.stringify(item))
                .toPromise()
                .then(() => item)
                .catch(this.handleError);
    }

    deleteItem(id: number): Promise<void> {
        const url = `${this.itemsUrl}/${id}`;
        return this.http.delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}