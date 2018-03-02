import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-blinky-manager',
  templateUrl: './blinky-manager.component.html',
  styleUrls: ['./blinky-manager.component.css']
})
export class BlinkyManagerComponent implements OnInit, OnDestroy {
  userNumber: number;
  childReferences: any[][];
  myInterval: any;
  myTimer: any;
  maxRange = 1;

  constructor() { }

  ngOnInit() {
    this.userNumber = 0;
    this.childReferences = [];
  }

  ngOnDestroy() {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
  }

  submitInput() {
    this.initializeArrays();
  }

  activate() {
    this.myInterval = setInterval(() => {
      this.calculate();
    }, 3000);
  }

  initializeArrays() {
    this.childReferences = [];
    for (let i = 0; i < this.userNumber; i++) {
      this.childReferences[i] = [];
      for (let j = 0; j < this.userNumber; j++) {
        this.childReferences[i][j] = {x: i, y: j, alive: false};
      }
    }
  }

  calculate() {
    for (let i = 0; i < this.childReferences.length; i++) {
      for (let j = 0; j < this.childReferences[i].length; j++) {
          this.childReferences[i][j].alive = this.checkNeighbors(i, j);
      }
    }
  }

  checkNeighbors(i: number, j: number): boolean {
    if (this.childReferences[i][j].alive === false) {
      return this.checkDeadCell(i, j);
    } else {
      return this.checkLiveCell(i, j);
    }
  }

  checkDeadCell(i: number, j: number): boolean {
    let count = 0;
    for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
      if (x < 0 || x > this.childReferences.length) {
        continue;
      }
      for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
        if (y < 0 || y > this.childReferences[x].length) {
          continue;
        }
          if ((x !== i && y !== j) && this.childReferences[x][y] !== undefined
            && this.childReferences[x][y] !== null && this.childReferences[x][y].alive === true) {
          count++;
        }
        if (count > 3) { return false; }
      }
    }
    if (count === 3) { return true; }
    return false;
    // let count = 0;
    // for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
    //   for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
    //     if (x >= 0 && y >= 0 && x !== i && y !== j && this.childReferences[x][y] !== undefined
    //       && this.childReferences[x][y] !== null && this.childReferences[x][y].alive === true) {
    //       count++;
    //     }
    //     if (count > 3) { return false; }
    //   }
    // }
    // if (count === 3) { return true; }
    // return false;
  }

  checkLiveCell(i: number, j: number): boolean {
    let count = 0;
    for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
      if (x < 0 || x > this.childReferences.length) {
        continue;
      }
      for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
        if (y < 0 || y > this.childReferences[x].length) {
          continue;
        }
          if ((x !== i && y !== j) && this.childReferences[x][y] !== undefined
            && this.childReferences[x][y] !== null && this.childReferences[x][y].alive === true) {
          count++;
        }
        if (count > 3) { return false; }
      }
    }
    if (count === 2 || count === 3) { return true; }
    return false;
    // let count = 0;
    // for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
    //   for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
    //     if (x >= 0 && y >= 0 && (x !== i && y !== j) && x < this.childReferences.length
    //      && y < this.childReferences[x].length && this.childReferences[x][y] !== undefined
    //       && this.childReferences[x][y] !== null && this.childReferences[x][y].alive === true) {
    //       count++;
    //     }
    //     if (count > 3) { return false; }
    //   }
    // }
    // if (count === 2 || count === 3) { return true; }
    // return false;
  }

  derp(i: number, j: number): boolean {
    let count = 0;
    for (let x = i - this.maxRange; x <= i + this.maxRange; x++) {
      if (x < 0 || x > this.childReferences.length) {
        continue;
      }
      for (let y = j - this.maxRange; y <= j + this.maxRange; y++) {
        if (y < 0 && y > this.childReferences[x].length) {
          continue;
        }
          if (this.childReferences[x][y] !== undefined && this.childReferences[x][y] !== null
             && this.childReferences[x][y].alive === true) {
          count++;
        }
        if (count > 3) { return false; }
      }
    }
    if (count === 2 || count === 3) { return true; }
    return false;
  }
}
