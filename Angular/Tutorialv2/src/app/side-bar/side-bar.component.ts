import {Component, ElementRef, OnInit} from '@angular/core';
import {Users} from "../model/users";
import {Groups} from "../model/groups";
import {GroupService} from "../service/group.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  inputSearch = new FormGroup({
    text: new FormControl()
  });
  groups: Groups[] = [
    {
      groupId: 1,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: true,
      groupName: 'KatoIT'
    },
    {
      groupId: 2,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: false,
      groupName: 'User 1'
    },
    {
      groupId: 3,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: false,
      groupName: 'User 2'
    },
    {
      groupId: 4,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: true,
      groupName: 'User 3'
    },
    {
      groupId: 5,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: false,
      groupName: 'User 4'
    },
    {
      groupId: 6,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      status: true,
      groupName: 'User 5'
    }
  ]
  groupIdSelected: undefined | number = 1;
  user: Users = {}
  menuShow: boolean = false;
  private userId = 0;

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUser()
    this.getGroupByUserId();
    this.inputSearch.controls['text'].valueChanges.subscribe(value => {
      if (value == "") {
        this.getGroupByUserId();
      } else {
        this.groups = this.groupService.getAll().filter(group => group.groupName?.toLowerCase().search(value.toLowerCase()) != -1)
      }
    })
  }

  getGroupByUserId() {
    this.groups = this.groupService.findGroupByUserId(this.user.userId);
    this.groupIdSelected = this.groups[0].groupId
  }

  selectUser(userId: number | undefined) {
    this.groupIdSelected = userId;
  }

  showMenu() {
    this.menuShow = !this.menuShow;
    // setTimeout(() => {
    //   if (this.menuShow != false)
    //   this.menuShow = false;
    // }, 2000);
  }

  getUser() {
    let u = this.userService.findUserById(this.userId);
    if (u != undefined) {
      this.user = u;
    }

  }

  addGroup() {
    this.menuShow = false;
    console.log("Join to group!!!")
  }

  searchGroup() {
    this.groups = this.groupService.getAll().filter(value => value.groupName?.toLowerCase().search(this.inputSearch.value['text'].toLowerCase()) != -1)
    // this.groups.find(value => )
    console.log(this.inputSearch.value['text']);
    // console.log();
  }
}
