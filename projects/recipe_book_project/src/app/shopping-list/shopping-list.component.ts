import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingridients: Array<Ingridient> = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)

  ];

  constructor() {}

  ngOnInit() {}
}
