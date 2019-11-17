import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatAll, filter, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Todo } from '../model/todo.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todoItems = new BehaviorSubject<Todo[]>([]);
  public todoItemsList$ = this.todoItems.asObservable();

  constructor(private apiService: ApiService) {
    this.getTodoItems()
      .pipe(
        concatAll(),
        filter((item: Todo) => !item.completed),
        toArray()
      )
      .subscribe(todoItems => {
        this.todos = todoItems;
        this.todoItems.next(this.todos);
      });
  }

  private getTodoItems(params = {}) {
    return this.apiService.getApiCall(environment.TODO_API, params);
  }

  get countOfCompletedItems() {
    return this.todos.filter(item => item.completed).length;
  }

  public toggleTodoStatus(itemId: number) {
    const todoItem = this.todos.find(item => item.id === itemId);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
    this.todoItems.next(this.todos);
  }
}
