import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  status:string;

  constructor() {
    this.status = Math.random() > .5 ? "online" : "offline";
  }
}
