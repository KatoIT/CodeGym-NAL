import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserCardComponent } from './side-bar/user-card/user-card.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageComponent } from './message-board/message/message.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    UserCardComponent,
    MessageBoardComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
