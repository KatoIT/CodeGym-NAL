import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { FriendsComponent } from './friends/friends.component';
import { FromUserComponent } from './from-user/from-user.component';
import { MessageBoardComponent } from './message-board/message-board.component';


@NgModule({
    declarations: [
        UserComponent,
        FriendsComponent,
        FromUserComponent,
        MessageBoardComponent
    ],
  exports: [
    FromUserComponent,
    UserComponent,
    FriendsComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
