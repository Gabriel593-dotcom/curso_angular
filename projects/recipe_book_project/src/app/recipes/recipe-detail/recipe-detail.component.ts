import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoplist() {
    this.shoppingListService.setIgridients(this.recipe.ingridients);
  }
}
