import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task
  @Input() index
  @Output() deleteIndex=new EventEmitter<number>();

  taskStatus:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  markAsDone(){
    this.taskStatus=!this.taskStatus
  }
  deleteTask(index:number){
    this.deleteIndex.emit(index)
  }

}
