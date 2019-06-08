import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TaskData } from '../task-data';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  item: TaskData = new TaskData();

  constructor(private todo: TodoService) { }

  add() {
    this.todo.addItem(this.item, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    this.item = new TaskData();
  }
}
