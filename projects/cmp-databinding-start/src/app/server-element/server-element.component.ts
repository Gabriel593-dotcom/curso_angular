import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

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
  @Input('srvElement')
  element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called!');
    console.log(changes);

  }

  ngOnInit() {
    console.log('onInit called!');
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
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('onDestroy called!');
  }
}
