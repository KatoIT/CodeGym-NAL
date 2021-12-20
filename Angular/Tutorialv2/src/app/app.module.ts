import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ImgSlideModule} from "./img-slide/img-slide.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImgSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
