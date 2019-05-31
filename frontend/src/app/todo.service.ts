import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList =[];

  constructor(private http: HttpClient) { this.load() }

  load() {

  }

  addItem(task: string, token: string) {
    this.todoList.unshift(task);
  }
}
