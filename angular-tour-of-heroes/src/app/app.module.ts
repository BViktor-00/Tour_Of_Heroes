import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnyadComponent } from './anyad/anyad.component';
import { ApadComponent } from './apad/apad.component';

@NgModule({
  declarations: [
    AppComponent,
    AnyadComponent,
    ApadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
