import {Injectable} from '@angular/core';
import {Users} from "../model/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Users[] = [
    {
      userId: 0,
      avatar: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg',
      nickName: 'KatoIT'
    }, {
      userId: 1,
      avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
      nickName: 'User_01'
    }, {
      userId: 2,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU',
      nickName: 'User_02'
    }, {
      userId: 3,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRXYrOHpacR8gy4JAxpOzvTNpeNL6pAcMSA&usqp=CAU',
      nickName: 'User_03'
    }, {
      userId: 4,
      avatar: '',
      nickName: 'User_04'
    }
  ]
  user = this.users[0]

    constructor() {
  }

  findUserById(id: number|undefined) {
    return this.users.find(value => value.userId === id)
  }

}
