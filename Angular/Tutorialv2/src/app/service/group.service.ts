import {Injectable} from '@angular/core';
import {Groups} from "../model/groups";
import {UserInGroup} from "../model/user-in-group";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Groups[] = [
    {
      groupId: 0,
      groupName: 'Group_01',
      avatar: ''
    }, {
      groupId: 1,
      groupName: 'Group_02',
      avatar: ''
    }, {
      groupId: 2,
      groupName: 'Group_03',
      avatar: ''
    }
  ]
  userInGroup: UserInGroup[] = [
    {
      groupId: 0,
      userId: 0
    }, {
      groupId: 0,
      userId: 1
    }, {
      groupId: 1,
      userId: 2
    }, {
      groupId: 1,
      userId: 1
    }, {
      groupId: 1,
      userId: 0
    }, {
      groupId: 0,
      userId: 4
    }
  ]

  constructor() {
  }

  findAllGroupByUserId(userId: number) {
    for (let group in this.userInGroup) {

    }
  }
}
