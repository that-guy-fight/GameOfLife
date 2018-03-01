import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-blinky',
  templateUrl: './blinky.component.html',
  styleUrls: ['./blinky.component.css']
})
export class BlinkyComponent implements OnInit, OnChanges {
  @Input('reference') reference: any;
  alive: boolean;

  constructor() { }

  ngOnInit() {
    const item = this.reference;
    this.alive = false;
  }

  ngOnChanges(event: any) {
    //this.alive = event.currentValue;
  }

  toggleBlinker() {
    this.reference = !this.reference;
  }
}
