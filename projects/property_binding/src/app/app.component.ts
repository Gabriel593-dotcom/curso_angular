import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  btnDisabled = true;

  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }
}
