import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TodoService } from './todo/todo.service';
import { TodoStore } from './todo/todoStore';
import { MyFocusDirective } from './directives/my-focus.directive';
import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoService, TodoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
