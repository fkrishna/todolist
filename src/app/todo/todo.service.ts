import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TodoStore } from './todoStore';
import { LocalStorage } from '../storage/local-storage';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodoStore, private storage: LocalStorage) { }

  init(): void {
    
    let data = this.storage.get()
    
    if (data && data.length > 0) {
      this.todoStore.todos = data;
      this.todoStore.get('all').map(todo => Object.setPrototypeOf(todo, Todo.prototype));
    }
    else
      console.log('local storage empty');
  }

  get(filter: string = 'all'): Todo[] {
    return this.todoStore.get(filter);
  }

  isEmpty(): boolean {
    return this.todoStore.get('all').length === 0;
  }

  remaining(): number {
    return this.todoStore.get('active').length;
  }

  add(newTodo: Todo): void {
    this.todoStore.add(newTodo);
    this.updateStorage();
  }

  remove(todo: Todo): void {
    this.todoStore.remove(todo);
    this.updateStorage();
  }

  removeAll(filter: string) {
    this.todoStore.removeAll(filter);
    this.updateStorage();
  }

  complete(todo: Todo, value: boolean): void {
    todo.completed = value;
    this.updateStorage();
  }

  completeAll(value: boolean): void {
    this.todoStore.get('all').map(todo => todo.completed = value);
    this.updateStorage();
  }

  updateStorage(): void {
    this.storage.set(this.todoStore.get('all'));
  }
}
