import {Injectable} from '@angular/core';
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    {
      groupId: 0,
      userId: 1,
      time: new Date('2021-12-28T00:00:00'),
      content: 'Hey!✨'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:01:00'),
      content: 'userId 2 Hello'
    }, {
      groupId: 0,
      userId: 3,
      time: new Date('2021-12-28T00:02:00'),
      content: 'userId 3 Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: new Date('2021-12-28T00:03:00'),
      content: 'userId 1 Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:04:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:05:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: new Date('2021-12-28T00:06:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: new Date('2021-12-28T00:07:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:08:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:09:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: new Date('2021-12-28T00:10:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: new Date('2021-12-28T00:11:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:12:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:13:00'),
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: new Date('2021-12-28T00:14:00'),
      content: 'Hello'
    },

  ];

  constructor() {
  }

  findMessageByGroupId(groupId: number | undefined) {
    return this.messages.filter(value => value.groupId == groupId);
  }

  addMessage(msg: Message){
    this.messages.push(msg);
  }
}
