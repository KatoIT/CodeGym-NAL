import {Injectable} from '@angular/core';
import {Users} from "../model/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Users[] = [
    {
      userId: 0,
      avatar: '',
      nickName: 'KatoIT',
      status: true
    }, {
      userId: 1,
      avatar: '',
      nickName: 'User_01',
      status: false
    }, {
      userId: 2,
      avatar: '',
      nickName: 'User_02',
      status: true
    }, {
      userId: 3,
      avatar: '',
      nickName: 'User_03',
      status: false
    }, {
      userId: 4,
      avatar: '',
      nickName: 'User_04',
      status: true
    }
  ]

  constructor() {
  }

  findUserById(id: number) {
    return this.users.find(value => value.userId === id)
  }

}
