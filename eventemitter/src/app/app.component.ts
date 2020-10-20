import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Message: {{message}}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventemitter';

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}
