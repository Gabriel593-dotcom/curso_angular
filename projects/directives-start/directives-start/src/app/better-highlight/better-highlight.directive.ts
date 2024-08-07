import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgoundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.element.nativeElement, 'color', '#fff');
    this.backgoundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.element.nativeElement, 'color', '#fff');

    this.backgoundColor = this.highlightColor;
    this.color = '#fff';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.element.nativeElement, 'color', '#000');    
    
    this.backgoundColor = this.defaultColor;
    this.color = '#000';
  }
}
