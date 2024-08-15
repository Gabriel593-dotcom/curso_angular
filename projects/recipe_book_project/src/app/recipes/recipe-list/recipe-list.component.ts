import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'; 
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  providers: [RecipeService]
})
export class RecipeListComponent {

  @Output('recipeClickItemEvent') recipeClickItemEvent = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); 
  }

  recipeListClickItemEvent(recipe: Recipe): void {
    this.recipeClickItemEvent.emit(recipe);
  }

}
