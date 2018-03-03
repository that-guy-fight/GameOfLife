import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-blinky-manager',
  templateUrl: './blinky-manager.component.html',
  styleUrls: ['./blinky-manager.component.css']
})
export class BlinkyManagerComponent implements OnInit, OnDestroy {
  userNumber: number;
  blinkyReferences: any[][];
  myInterval: any;
  myTimer: any;
  referencesCopy: any[][];
  maxRange = 1;
  canActivate: boolean;
  hasSubmitted: boolean;
  isRunning = { state: false };

  constructor() { }

  ngOnInit() {
    this.blinkyReferences = [];
    this.referencesCopy = [];
    this.canActivate = false;
    this.hasSubmitted = false;
  }

  ngOnDestroy() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  }

  submitInput() {
    if (!this.checkUserNumberInput()) {
      //bad user input
    } else {
      this.canActivate = true;
      this.hasSubmitted = true;
      this.initializeArrays();
    }
  }

  initializeArrays() {
    this.blinkyReferences = [];
    for (let i = 0; i < this.userNumber; i++) {
      this.blinkyReferences[i] = [];
      for (let j = 0; j < this.userNumber; j++) {
        this.blinkyReferences[i][j] = { x: i, y: j, alive: false };
      }
    }
  }

  activate() {
    this.canActivate = false;
    this.isRunning.state = true;
    this.referencesCopy = this.cloneObject(this.blinkyReferences);
    this.myInterval = setInterval(() => {
      this.calculate();
    }, 1000);
  }

  stop() {
    this.canActivate = true;
    this.isRunning.state = false;
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  }

  calculate() {
    for (let i = 0; i < this.referencesCopy.length; i++) {
      for (let j = 0; j < this.referencesCopy[i].length; j++) {
        this.checkNeighbors(i, j);
      }
    }
    this.blinkyReferences = this.cloneObject(this.referencesCopy);
  }

  checkNeighbors(i: number, j: number): boolean {
    return this.checkCell(i, j, this.referencesCopy[i][j].alive);
  }

  checkCell(i: number, j: number, alive: boolean): boolean {
    let count = 0;
    for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
      if (x < 0 || x >= this.referencesCopy.length) {
        continue;
      }
      for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
        if (y < 0 || y >= this.referencesCopy[x].length) {
          continue;
        }
        if (this.checkForValidCell(i, j, x, y) && this.blinkyReferences[x][y].alive === true) {
          count++;
        }
        if (count > 3) { return false; }
      }
    }
    if (alive) {
      if (count === 2 || count === 3) { return true; }
    } else {
      if (count === 3) { return true; }
    }
    return false;
  }

  checkForValidCell(i: number, j: number, x: number, y: number): boolean {
    if ((x !== i || y !== j) && this.referencesCopy[x][y] !== undefined
      && this.referencesCopy[x][y] !== null) {
      return true;
    }
    return false;
  }

  checkInputKey(event: any) {
    if (event.key === 'Enter' && this.userNumber !== undefined) {
      this.submitInput();
    } else {
      const numberPattern = /^[0-9]$/;
      if (!numberPattern.test(event.key)) {
        event.preventDefault();
      }
    }
  }

  checkUserNumberInput(): boolean {
    const validPattern = /^[0-9]+$/;
    if (!validPattern.test(this.userNumber.toString())) {
      //bad user input
      return false;
    }
    return true;
  }

  cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
