import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskData } from './task-data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList =[];

  constructor(private http: HttpClient) { this.load() }

  load() {

  }

  addItem(task: TaskData, token: string) {
    this.todoList.unshift(task);
  }
}
