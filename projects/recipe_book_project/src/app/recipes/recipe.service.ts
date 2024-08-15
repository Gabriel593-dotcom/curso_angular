import { Recipe } from "./recipe.model";

export class RecipeService {
 
    private recipes: Array<Recipe> = [
        new Recipe("A test Recipe 1", "this is a simply test 1", "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw"),
        new Recipe("A test Recipe 2", "this is a simply test 2", "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw")
      ];

    // pass a copy of this array, not this array.  
    getRecipes() {
        return this.recipes.slice();
    }
}