import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output('recipeClickEvent') recipeEvent = new EventEmitter<{}>();
  @Output('shoppingListClickEvent') shoppingListEvent = new EventEmitter<{}>();

  displayRecipes(): void {
    this.recipeEvent.emit({});
  }

  displayShoppingList(): void {
    this.shoppingListEvent.emit({});
  }
}
