import {Component, OnInit} from '@angular/core';
import {MessageService} from "../service/message.service";
import {Groups} from "../model/groups";
import {Message} from "../model/message";
import {UserService} from "../service/user.service";
import {Users} from "../model/users";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  group: Groups = {
    groupId: 0,
    groupName: 'abc123',
    status: true,
    avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'
  }
  messages: Message[] = []
  user: Users = {};
  showMenu: boolean = false;
  inputMessage = new FormGroup({
    msg: new FormControl()
  })

  constructor(
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.messages = this.messageService.findMessageByGroupId(this.group.groupId);
  }

  showMenuMSG() {
    this.showMenu = !this.showMenu;
  }
}
