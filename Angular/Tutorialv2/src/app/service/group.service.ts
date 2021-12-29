import {Injectable} from '@angular/core';
import {Groups} from "../model/groups";
import {UserInGroup} from "../model/user-in-group";
import {BehaviorSubject, Subject} from "rxjs";
import {UserService} from "./user.service";
import {Users} from "../model/users";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  // Data
  groupsAll: Groups[] = [
    {
      groupId: 0,
      groupName: 'Group_01',
      avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-de-thuong.jpg',
      status: true
    }, {
      groupId: 1,
      groupName: 'Group_02',
      avatar: 'https://ps.w.org/image-hover-effects-block/assets/icon-128x128.png?rev=2117422',
      status: true
    }, {
      groupId: 2,
      groupName: 'Group_03',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOxW9M4u4-NarBngujCBd94zuSBeUBI6fEA&usqp=CAU',
      status: true
    }, {
      groupId: 3,
      groupName: 'Group_04',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxo-JtDX_l4fYlVvlJL2GLKpNN7TfgPPjhg&usqp=CAU',
      status: false
    }, {
      groupId: 4,
      groupName: 'Group_05',
      avatar: 'https://i.pinimg.com/originals/7c/70/ee/7c70eeef9594b10a5d4bd9ed2fe2e085.jpg',
      status: true
    }
  ]
  userInGroup: UserInGroup[] = [
    {
      groupId: 0,
      userId: 0,
      nickName: 'KatoIT'
    }, {
      groupId: 0,
      userId: 1,
      nickName: 'User_01'
    }, {
      groupId: 0,
      userId: 2,
      nickName: 'User_02'
    }, {
      groupId: 0,
      userId: 3,
      nickName: 'User_03'
    }, {
      groupId: 3,
      userId: 2,
      nickName: 'User_02'
    }, {
      groupId: 1,
      userId: 1,
      nickName: 'User_01'
    }, {
      groupId: 4,
      userId: 0,
      nickName: 'KatoIT'
    }, {
      groupId: 0,
      userId: 4,
      nickName: 'User_04'
    }, {
      groupId: 2,
      userId: 0,
      nickName: 'KatoIT'
    }, {
      groupId: 3,
      userId: 0,
      nickName: 'KatoIT'
    }
  ]
  // Variable
  groupIdSelected = new BehaviorSubject<number>(-1)
  groupsOfUser: Groups[] = [];

  constructor(
    private userService: UserService
  ) {
    this.findGroupByUserId();
  }

  findGroupByUserId() {
    this.groupsOfUser = [];
    for (let inGroup of this.userInGroup) {
      if (this.userService.userLoggedIn.value.userId == inGroup.userId) {
        let gr = this.groupsAll.find(value => value.groupId == inGroup.groupId);
        if (gr != undefined) {
          this.groupsOfUser.push(gr);
        }
      }
    }
    if (this.groupsOfUser[0].groupId != undefined) {
      this.groupIdSelected.next(this.groupsOfUser[0].groupId)
    }
  }

  findGroupByGroupId() {
    return this.groupsAll.find(value => value.groupId === this.groupIdSelected.value)
  }

  findGroupOfUserByGroupId() {
    return this.groupsOfUser.find(value => value.groupId === this.groupIdSelected.value)
  }

  getAll() {
    return this.groupsAll;
  }

  outGroup() {
    let index = this.userInGroup.findIndex(value =>
      value.userId === this.userService.userLoggedIn.value.userId
      && value.groupId === this.groupIdSelected.value);
    // Delete User in array 'userInGroup'
    this.userInGroup.splice(index, 1);
    // Delete Group in array 'groupOfUser'
    this.groupsOfUser.splice(
      this.groupsOfUser.findIndex(
        value => value.groupId === this.groupIdSelected.value),
      1)
    // Select first group on array 'groupsOfUser'
    if (this.groupsOfUser[0].groupId != undefined) {
      this.groupIdSelected.next(this.groupsOfUser[0].groupId)
    }
  }


  joinGroup(nickName: string) {
    this.userInGroup.push({
      groupId: this.groupIdSelected.value,
      userId: this.userService.userLoggedIn.value.userId,
      nickName: nickName
    })
    this.findGroupByUserId()
  }

  findNickNameById(userId: number | undefined) {
    if (userId === -404) {
      return "Bot"
    }
    let nickName = this.userInGroup.find(value => value.groupId === this.groupIdSelected.value && value.userId === userId);
    if (nickName != undefined)
      return nickName.nickName
    return "The user has left the group";
  }
}
