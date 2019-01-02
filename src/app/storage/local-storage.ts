import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorage {

    TOKEN = 'ng-todo-app';

    constructor() { }

    get(): any[] {
        if (localStorage.getItem(this.TOKEN)) {
            return JSON.parse(localStorage.getItem(this.TOKEN));
        }
    }

    set(data: any[]) {
        localStorage.setItem(this.TOKEN, JSON.stringify(data));
    }
}
