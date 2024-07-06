import { Component } from '@angular/core';


//NOTE: Two way binding needs FormsModule package to work!


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text: string = "text";

  onSwapText() {
    if (this.text == "text")
      this.text = "other text";
    else
      this.text = "text";
  }
}
