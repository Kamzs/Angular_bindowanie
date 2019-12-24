import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindowanieJednostronneComponent } from './bindowanie-jednostronne/bindowanie-jednostronne.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ModyfzmiennychNapodstawieEventowComponent } from './modyfzmiennych-napodstawie-eventow/modyfzmiennych-napodstawie-eventow.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BindowanieJednostronneComponent,
    EventBindingComponent,
    ModyfzmiennychNapodstawieEventowComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
