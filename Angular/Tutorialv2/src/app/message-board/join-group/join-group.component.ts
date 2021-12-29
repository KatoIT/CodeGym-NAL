import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {UserService} from "../../service/user.service";
import {GroupService} from "../../service/group.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  @Output() joined = new EventEmitter<boolean>();
  inputNickname = new FormGroup({
    nickname: new FormControl()
  })

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private groupService: GroupService
  ) {
  }

  ngOnInit(): void {
  }

  joinGroup() {
    this.groupService.joinGroup(this.inputNickname.controls["nickname"].value);
    this.joined.emit(true);
  }
}
