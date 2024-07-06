import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [
    new Recipe("A test Recipe", "this is a simply test", "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw"),
    new Recipe("A test Recipe", "this is a simply test", "https://imgs.search.brave.com/FML51bzCuy3c4t_5W_0ipMnJTjhypg8phDTysG0PcYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waW5j/aG9meXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvTXVzaHJv/b20tU2FuZHdpY2gt/OS04MDB4ODAwLmpw/Zw")
  ];

  constructor() {

  }

  ngOnInit() {}

}
