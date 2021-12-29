import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../model/message";
import {Users} from "../../model/users";
import {UserService} from "../../service/user.service";
import {GroupService} from "../../service/group.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  user: Users = {};
  nickName: string | undefined = '';
  @Input() message: Message = {};
  userLoggedIn: Users = {};

  constructor(
    private userService: UserService,
    private groupService: GroupService
  ) {

  }

  ngOnInit(): void {
    this.nickName = this.groupService.findNickNameById(this.message.userId);
    this.getUser();
    this.userService.userLoggedIn.subscribe(value => this.userLoggedIn = value);
  }

  getUser() {
    let u = this.userService.findUserById(this.message.userId);
    if (u != undefined) {
      this.user = u;
    }
  }

}
