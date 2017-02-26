import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundService {
    constructor() {
    }

    getBackgroundClass(): String {
        return 'home';
    }
}   