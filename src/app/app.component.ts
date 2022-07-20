import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-list';
  tasks:string[]=[];
  task:string;

  addTask(task:string){
    this.tasks.push(task);
  }

}
