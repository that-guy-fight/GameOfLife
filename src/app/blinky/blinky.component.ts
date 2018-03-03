import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blinky',
  templateUrl: './blinky.component.html',
  styleUrls: ['./blinky.component.css']
})
export class BlinkyComponent implements OnInit {
  @Input('reference') reference: any;
  @Input('isRunning') isRunning: any;
  alive: boolean;

  constructor() { }

  ngOnInit() {
    const item = this.reference;
    this.alive = false;
  }

  toggleBlinker() {
    this.reference.alive = !this.reference.alive;
  }
}
