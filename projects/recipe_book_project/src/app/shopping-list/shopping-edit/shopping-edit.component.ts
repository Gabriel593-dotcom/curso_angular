import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('ingridientName', {static: true}) ingridientName: ElementRef;
  @ViewChild('ingridientQuantity', {static: true}) ingridientQuantity: ElementRef;

  @Output('ingridientAddEvent') ingridientAddEvent = new EventEmitter<Ingridient>();

  addIngrient(): void {

    let ingridient = new Ingridient(
      this.ingridientName.nativeElement.value, 
      this.ingridientQuantity.nativeElement.value);
    
      this.ingridientAddEvent.emit(ingridient);
  }
}
