import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  components = [];

  receiveGameTime(gameTimeEvent: {gameTime: number, gameStoped: boolean}): void {
    
    if(gameTimeEvent.gameTime % 2 != 0) {
      this.components.push({type: 'Odd', time: gameTimeEvent.gameTime});
      return;
    }

    this.components.push({type: 'Even', time: gameTimeEvent.gameTime});    

    if(gameTimeEvent.gameStoped) {

      setTimeout(() => {
        this.components = [];
      }, 1000);

      return;
    } 

  }

}
