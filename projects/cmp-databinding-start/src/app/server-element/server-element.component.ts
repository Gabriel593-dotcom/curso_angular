import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, 
  AfterViewInit,
  AfterContentChecked, 
  OnDestroy
  {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('header', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called!');
    console.log(changes);

  }

  ngOnInit() {
    console.log('onInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('doCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('onDestroy called!');
  }
}
