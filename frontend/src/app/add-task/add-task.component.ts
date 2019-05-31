import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private todo: TodoService) { }
  item: string;

  //TODO add task logic
  add() {
    this.todo.addItem(this.item, '');
    this.item = '';
  }
}
