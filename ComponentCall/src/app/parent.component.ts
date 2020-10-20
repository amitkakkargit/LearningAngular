import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>From Parent</h1>
    <app-child (temp)="receiveMessage($event)"></app-child>
    Message: {{message}}
  `
})
export class ParentComponent {
   message: string;

  receiveMessage($event)
  {
    this.message = $event;
  }
}
