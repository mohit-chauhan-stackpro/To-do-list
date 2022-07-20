import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task
  taskStatus:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  markAsDone(){
    this.taskStatus=!this.taskStatus
  }

}
