import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingridient } from "../shared/ingridient.model";

export class RecipeService {
 
    private recipeSelected = new EventEmitter<Recipe>();

    private recipes: Array<Recipe> = [
        new Recipe("A test Recipe 1", 
            "this is a simply test 1", 
            "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw", 
            [new Ingridient("meat", 1)]),
        new Recipe("A test Recipe 2", 
            "this is a simply test 2", 
            "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw", 
            [new Ingridient("meat", 1)])
      ];

    
    getRecipeSelected() {
        return this.recipeSelected;
    }

    // pass a copy of this array, not this array.  
    getRecipes() {
        return this.recipes.slice();
    }
}