import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css', 
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OddComponent {
  
  @Input('oddNumber') oddNumber: number;
}
