import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: TodoListComponent }])],
  providers: []
})
export class TodoModule {}
