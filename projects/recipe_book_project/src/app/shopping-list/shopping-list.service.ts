import { EventEmitter, OnInit } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService  {
    ingridientsChanged = new EventEmitter<Ingridient[]>();
    private ingridients: Ingridient[]; 

    getIgridients() {
        return this.ingridients.slice();
    } 
    
    setIgridients(ingridients: Ingridient[]) {
        this.ingridients = ingridients;
    }

    addIngridient(ingridient: Ingridient): void {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.emit(this.ingridients.slice());
    }
}