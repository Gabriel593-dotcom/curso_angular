import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent implements OnInit{
  
  @Output('gameTime') gameTimeEvent = new EventEmitter<{gameTime: number, gameStoped: boolean}>();
  gameTime: number;
  gameStoped: boolean;
  disabled: boolean;

  constructor() {
    this.gameTime = 0;
    this.gameStoped = false;
    this.disabled = false;
  }

  ngOnInit(): void {

  }

  startGame(): void {
    this.gameStoped = false;
    this.gameTime = 0;
    this.disabled = true;

    let myInterval = setInterval(() => {
      this.gameTime++;
      this.gameTimeEvent.emit({gameTime: this.gameTime, gameStoped: false});

      if (this.gameStoped) 
        clearInterval(myInterval); 
    }, 1000);
  }

  stopGame(): void {
    this.gameStoped = (this.gameTime == 0) ? false : true;
    this.disabled = false;
    this.gameTimeEvent.emit({gameTime: 0, gameStoped: this.gameStoped});
  }
}
