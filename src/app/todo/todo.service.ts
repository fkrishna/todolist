import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TodoStore } from './todoStore';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodoStore) { }

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
  }

  remove(todo: Todo): void {
    this.todoStore.remove(todo);
  }

  removeAll(filter: string) {
    this.todoStore.removeAll(filter);
  }

  complete(todo: Todo, value: boolean): void {
    todo.completed = value;
  }

  completeAll(value: boolean): void {
    this.todoStore.get('all').map(todo => todo.completed = value);
  }
}
