import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import {HttpService} from './modules/http.service';
import { WebSocketService } from './modules/web-socket.service';
import { BidService } from './modules/bid.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService,WebSocketService,BidService],

  bootstrap: [AppComponent]
})
export class AppModule { }
