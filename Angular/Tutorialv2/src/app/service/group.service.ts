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
      avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-de-thuong.jpg',
      status: true
    }, {
      groupId: 1,
      groupName: 'Group_02',
      avatar: 'https://lh3.googleusercontent.com/proxy/ErC4jKhMUBnCw2O9NXjb8PMTpgmsUVKnIH7i4gz1tq9GKw3pylBl7WscuMi9DGzk-UyuUlv68DllYa8tvZfGoOHEy3fORWt71G5f7fX1_wL638oV0Yk',
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
      nickName: ''
    }, {
      groupId: 0,
      userId: 1,
      nickName: ''
    }, {
      groupId: 1,
      userId: 2
    }, {
      groupId: 1,
      userId: 1,
      nickName: ''
    }, {
      groupId: 4,
      userId: 0,
      nickName: ''
    }, {
      groupId: 0,
      userId: 4,
      nickName: ''
    }, {
      groupId: 2,
      userId: 0,
      nickName: ''
    }, {
      groupId: 3,
      userId: 0,
      nickName: ''
    }
  ]

  constructor() {
  }

  findGroupByUserId(userId: number | undefined) {
    let groupsOfUser: Groups[] = [];
    for (let inGroup of this.userInGroup) {
      if (userId == inGroup.userId) {
        let gr = this.groups.find(value => value.groupId == inGroup.groupId);
        if (gr != undefined) {
          groupsOfUser.push(gr);
        }
      }
    }
    return groupsOfUser;
  }

  getAll() {
    return this.groups;
  }
}
