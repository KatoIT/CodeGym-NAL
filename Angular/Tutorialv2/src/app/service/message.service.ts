import {Injectable} from '@angular/core';
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [
    {
      groupId: 0,
      userId: 1,
      time: '',
      content: 'Hey!✨'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 3,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 1,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 2,
      time: '',
      content: 'Hello'
    }, {
      groupId: 0,
      userId: 0,
      time: '',
      content: 'Hello'
    },

  ];

  constructor() {
  }

  findMessageByGroupId(groupId: number | undefined) {
    return this.messages.filter(value => value.groupId == groupId);
  }
}
