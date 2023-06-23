import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic TODO List';

  public tasks = "";
  public list = ['task 1', 'task 2', 'task 3'];

  addTask() {
    this.list.push(this.tasks);
  }

  removeTask(item: any) {
    // this will remove the task from the list
    // indexOf get the position of the item in array list
    this.list.splice(this.list.indexOf(item),1); 
  }
}
