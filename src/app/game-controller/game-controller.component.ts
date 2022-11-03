import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  saveTimer : any
  @Output() increment = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    let i = 0;
    this.saveTimer = setInterval( () => {
      this.increment.next(i)
      i++;
    }, 1000)

  }

  stopGame(){
    clearInterval(this.saveTimer)
  }

}