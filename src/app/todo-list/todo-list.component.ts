import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: any;
  public srctodos: any;
  public addNew: any;
  public inputModel: any;
  
  @Input() set dados(todos: any) {
    this.todos = todos;
    this.srctodos = todos;
  }



  constructor() { }

  ngOnInit() {
  }
  public addTodo(val) {
    if (val.length > 3) {

      const newTodo = {
        status: false,
        description: val,
        createdAt: new Date()
      }

      this.todos.push(newTodo);
      this.srctodos = this.todos;
      this.addNew = !this.addNew;
      this.inputModel = '';
    }

  }
  

  transform(term: string) {
    const keys = 'status,description';
    this.todos = (this.srctodos || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}
