import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private todoService: TodoService) {}

  viewItems() {
    this.router.navigate(['todo']);
  }
}
