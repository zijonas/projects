import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TaskData } from '../task-data';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private todo: TodoService) { }
  item: TaskData = new TaskData();

  //TODO add task logic
  add() {
    this.todo.addItem(this.item, '');
    this.item = new TaskData();
  }
}
