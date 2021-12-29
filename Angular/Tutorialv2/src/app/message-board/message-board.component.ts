import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "../service/message.service";
import {Groups} from "../model/groups";
import {Message} from "../model/message";
import {UserService} from "../service/user.service";
import {Users} from "../model/users";
import {FormControl, FormGroup} from "@angular/forms";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  group: Groups = {}
  messages: Message[] = []
  userLoggedIn: Users = {};
  menuListMembers: boolean = false;
  inputMessage = new FormGroup({
    msg: new FormControl()
  })
  joined = false;
  members: Users[] = [];
  @ViewChild("messageContainer") mContainer: ElementRef = new ElementRef<number>(1);

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private groupService: GroupService
  ) {

  }

  ngOnInit(): void {
    // Get user Logged in
    this.userService.userLoggedIn.subscribe(value => this.userLoggedIn = value);
    // group Selected
    this.groupService.groupIdSelected.subscribe({
      next: value => {
        let gr = this.groupService.findGroupOfUserByGroupId();
        if (gr != undefined) {
          this.joined = true;
          this.group = gr;
          this.getAll();
        } else {
          gr = this.groupService.findGroupByGroupId();
          if (gr != undefined) {
            this.joined = false;
            this.group = gr;
            this.getAll();
          }
        }
        this.inputMessage.reset()
      }
    });
  }


  ngAfterViewChecked() {
    this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
  }

  getAll() {
    this.messages = this.messageService.findMessageByGroupId(this.group.groupId);
    this.members = this.groupService.getMembers();
  }

  showListMembers() {
    this.menuListMembers = !this.menuListMembers;
    setTimeout(() => {
      if (this.menuListMembers) {
        this.menuListMembers = false;
      }
    }, 2000)
  }

  sendMSG() {
    const ct = this.inputMessage.controls['msg'].value
    if (ct != null && ct.trim() != '') {
      let msg: Message = {
        userId: this.userLoggedIn.userId,
        groupId: this.group.groupId,
        time: new Date(),
        content: ct.trim(),
      }
      this.messageService.addMessage(msg);
      this.inputMessage.reset()
      this.getAll()
      console.log(msg)
    }

  }

  outGroup() {
    let msg: Message = {
      userId: this.userService.bot.userId,
      groupId: this.group.groupId,
      time: new Date(),
      content: this.groupService.findNickNameById(this.userLoggedIn.userId) + " đã rời khỏi nhóm.",
    }
    this.messageService.addMessage(msg);
    this.getAll();
    this.groupService.outGroup()
  }

  setJoin(isJoined: any) {
    this.joined = isJoined;
    let msg: Message = {
      userId: this.userService.bot.userId,
      groupId: this.group.groupId,
      time: new Date(),
      content: this.groupService.findNickNameById(this.userLoggedIn.userId) + " đã tham gia nhóm.",
    }
    this.messageService.addMessage(msg);
    this.getAll();
  }

  viewMembers() {
    this.menuListMembers = !this.menuListMembers;
  }

  getNickName(userId: any){
    return this.groupService.findNickNameById(userId)
  }

  chatWithMember(mem: Users) {
    this.menuListMembers = false
    this.groupService.newGroup(mem);
    this.getAll();
  }
}
