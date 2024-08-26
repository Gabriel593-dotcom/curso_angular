import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService {
    ingridientsChanged = new EventEmitter<Ingridient[]>();
    private ingridients: Array<Ingridient> = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
    ];

    getIgridients() {
        return this.ingridients.slice();
    } 

    addIngridient(ingridient: Ingridient): void {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.emit(this.ingridients.slice());
    }
}