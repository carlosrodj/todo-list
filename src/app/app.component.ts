import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'html-tema';
  public todos = [
    {
      status : false,
      description: 'teste 1',
      createdAt: new Date()
    },
    {
      status : true,
      description: 'teste 2',
      createdAt: new Date()
    },
    {
      status : false,
      description: 'teste 3',
      createdAt: new Date()
    }
  ]
}
