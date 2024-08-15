import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  
  ingridients: Ingridient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingridients = this.shoppingListService.getIgridients();
  }

  addIngridient(ingridient: Ingridient): void {
    this.shoppingListService.addIngridient(ingridient); 
  }
}
