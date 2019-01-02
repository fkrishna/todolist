import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class TodoStore {

    private _todos: Todo[] = new Array;

    constructor() { }

    set todos(data) {
        this._todos = data;    
    }

    get(filter: string = 'all'): Todo[] {

        switch(filter) {
            case 'active': return this._todos.filter(todo => !todo.completed);
            case 'completed': return this._todos.filter(todo => todo.completed);
            default: return this._todos;
        }
    }

    add(newTodo: Todo): void {
        this._todos.push(newTodo);
    }

    remove(todo: Todo): void {
        this._todos.splice(this._todos.indexOf(todo), 1);
    }

    removeAll(filter: string): void {
        filter = (filter == 'active') ? 'completed' : 'active';
        this._todos = this.get(filter);
    }
}