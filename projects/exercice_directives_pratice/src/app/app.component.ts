import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  paragraphShouldAppear:boolean;
  log = [];

  constructor() {
    this.paragraphShouldAppear = false;
  }

  onClickButton() {
    this.paragraphShouldAppear = this.paragraphShouldAppear ? false : true;
    this.log.push(new Date());
  }
}
 