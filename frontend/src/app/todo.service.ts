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
    this.todoList.unshift(task);
    
    const getTokenUrl = 'http://localhost:8080/app/insertTask';
    const getTokenParameters: HttpParams = new HttpParams()
    .append('task', JSON.stringify(task));
    const getTokenHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Bearer' + token);;

    return this.http.post(getTokenUrl, {
        withCredentials: true
      }, {
        headers: getTokenHeaders, 
        params: getTokenParameters
      }
  }
}
