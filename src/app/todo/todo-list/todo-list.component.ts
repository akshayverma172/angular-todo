import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../shared/model/todo.model';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: Todo[];

  constructor(private todoService: TodoService, private router: Router) {}

  completeTask(itemId: number) {
    this.todoService.toggleTodoStatus(itemId);
  }
}
