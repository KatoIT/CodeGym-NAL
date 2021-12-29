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
  groups: Groups[] = []
  groupIdSelected: number = -1;
  userLogin: Users = {}
  menuShow: boolean = false;
  private userId = 0;

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {
    this.getGroupByUserId();
  }

  ngOnInit(): void {
    // Get user Logged in
    this.userService.userLoggedIn.subscribe(value => this.userLogin = value);
    // Get Group by name Search
    this.inputSearch.controls['text'].valueChanges.subscribe(value => {
      if (value == "") {
        this.getGroupByUserId();
      } else {
        this.groups = this.groupService.getAll().filter(group => group.groupName?.toLowerCase().search(value.toLowerCase()) != -1)
      }
    })
  }

  getGroupByUserId() {
    this.groups = this.groupService.groupsOfUser;
    if (this.groups[0].groupId != undefined) {
      this.groupIdSelected = this.groups[0].groupId;
      this.groupService.groupIdSelected.next(this.groupIdSelected);
    }

  }

  selectGroup(groupId: number | undefined) {
    if (groupId != undefined) {
      this.groupIdSelected = groupId;
      this.groupService.groupIdSelected.next(groupId)
    }
  }

  showMenu() {
    this.menuShow = !this.menuShow;
    setTimeout(() => {
      if (this.menuShow) {
        this.menuShow = false;
      }
    }, 2000)
  }

  searchGroup() {
    this.groups = this.groupService.getAll().filter(value => value.groupName?.toLowerCase().search(this.inputSearch.value['text'].toLowerCase()) != -1);
  }

  login(userId: number) {
    this.userService.login(userId);
    this.groupService.findGroupByUserId();
    this.getGroupByUserId();
  }
}
