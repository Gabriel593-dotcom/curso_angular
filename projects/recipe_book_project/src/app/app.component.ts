import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  recipeClicked: boolean;
  shoppingListClicked: boolean;

  constructor() {
    this.recipeClicked = true
    this.shoppingListClicked = false;
  }

  receiveRecipeClickEvent(event: any): void {
    console.log('recipe click event');
    this.recipeClicked = true;
    this.shoppingListClicked = false;
  }

  receiveShoppingListClickEvent(event: any): void {
    console.log('shopping list click event');
    this.recipeClicked = false;
    this.shoppingListClicked = true;
  }

}
