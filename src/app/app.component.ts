import { Component, OnInit } from '@angular/core';
import { Todo } from './todo/todo';
import { TodoService } from './todo/todo.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  todostr: string;

  private filter: string

  private is_all_completed: boolean

  constructor(private todoService: TodoService, private router: Router) { 
    this.is_all_completed = false;
  }

   ngOnInit() {

    this.todoService.init();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/active': this.filter = 'active';
          break;
          case '/completed': this.filter = 'completed';
          break
          default: this.filter = 'all';
        }
      }
    });
  }

  get length(): number {
    return this.todoService.get().length;
  }

  get todos(): Todo[] {
    return this.todoService.get(this.filter);
  }

  isEmpty(): boolean {
    return this.todoService.isEmpty();
  }

  newTodo(): void {
    if (this.strValidate(this.todostr)) {
      this.todoService.add(
        new Todo(this.todostr)
      );
      this.clearInput();
    }
  }

  edit(todo: Todo): void {
    todo.editing = true;
  }

  isAllCompleted(): boolean {

    if (!this.todoService.isEmpty() && this.todoService.remaining() === 0)
      this.is_all_completed = true;
    else
      this.is_all_completed = false;

    return this.is_all_completed;
  }

  remove(todo: Todo): void {
    this.todoService.remove(todo);
  }

  toggleComplete(todo: Todo): void {
    this.todoService.complete(todo, !todo.completed);
  }

  toggleCompleteAll(): void {
    this.todoService.completeAll(!this.is_all_completed);
  }

  cancelEditing(todo: Todo, input): void {
    todo.editing = false;
    input.value = todo.title;
  }

  update(todo: Todo, new_title: string): void {

    if (this.strValidate(new_title)) {
      todo.title = new_title;
      todo.editing = false;
    }

    todo.editing = false;
    this.todoService.updateStorage();
  }

  clearInput(): void {
    this.todostr = "";
  }

  clearCompleted() {
    this.todoService.removeAll('completed');
  }

  strValidate(text: string): boolean {
    return (text && text.trim()) ? true : false;
  }
}

