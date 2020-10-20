import { Component } from '@angular/core';
import {Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child',
  template: `
    <h1>From Child</h1>
    <button (click)="sendMessage()">Send Message to Parent</button>
  `
})
export class ChildComponent {
  @Output() temp = new EventEmitter();
  sendMessage()
  {
      this.temp.emit("Message from child component!!!");
  }
}
