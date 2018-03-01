import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlinkyComponent } from './blinky/blinky.component';
import { BlinkyManagerComponent } from './blinky-manager/blinky-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    BlinkyComponent,
    BlinkyManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
