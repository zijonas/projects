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
    
    const getTokenUrl = 'http://localhost:8080/insertTask';
    const getTokenParameters: HttpParams = new HttpParams()
    .append('task', task.title);
    const getTokenHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Bearer' + token);

    this.http.post(getTokenUrl, {
        withCredentials: true
      }, {
        headers: getTokenHeaders, 
        params: getTokenParameters
      }
    ).subscribe((res) => {
      console.log(res);
      this.todoList.unshift(task);
    });
  }
}
