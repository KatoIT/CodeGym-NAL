import {Component, Input, OnInit} from '@angular/core';
import {Groups} from "../../model/groups";
import {Message} from "../../model/message";
import {Users} from "../../model/users";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  user: Users = {};
  @Input() message: Message = {};
  userLogn: Users = {};
  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.userLogn = this.userService.user;
  }

  getUser() {
    console.log(this.message.userId)
    let u = this.userService.findUserById(this.message.userId);
    if (u != undefined) {
      this.user = u;
    }

  }

}
