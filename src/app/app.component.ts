import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // define list of items
  title = 'todo list';
  public items: Array<{ task: string, complete: boolean }>= [];
  values = '';


  constructor() {
    this.submitNewItem("test1")
    this.submitNewItem("test2")
    this.submitNewItem("test3")
  }

  onKey(value: string) {
    this.values += value;
  }

  // Write code to push new item
  submitNewItem(task_label) {
    this.items.push({
      task: task_label,
      complete: false
    });
  }

  addUserTask(task) {
    this.submitNewItem(task)
  }

  // Write code to complete item
  completeItem(id) {
    this.items[id].complete = true;
  }

  // Write code to delete item
  deleteItem(take_id) {
    for(var i = take_id; i < this.items.length; i++){
      this.items[i] = this.items[i + 1];
    }
    this.items.pop();
  }

}
