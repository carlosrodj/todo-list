import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todo: any
  
  @Input() set dados(todo: any) {    
    this.todo = todo;
  }
  constructor() { }

  ngOnInit() {
  }



  
}
