import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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
    
    task.dueDate = new Date();

    const getTokenUrl = 'http://localhost:8080/insertTask';

    const getTokenParameters: HttpParams = new HttpParams()
    .append('task', JSON.stringify(task));
    const getTokenHeaders: HttpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token);

    console.log(task);

    this.http.post<TaskData>(getTokenUrl, task, {
      headers: getTokenHeaders,
      withCredentials: true
    }).subscribe((res) => {
      console.log(res);
      this.todoList.unshift(task);
    });
  }
}
