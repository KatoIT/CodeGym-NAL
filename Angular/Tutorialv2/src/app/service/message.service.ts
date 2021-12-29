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
      content: 'Xin chào'
    }, {
      groupId: 0,
      userId: 3,
      time: new Date('2021-12-28T00:02:00'),
      content: 'Chào cả nhà❤'
    },{
      groupId: 0,
      userId: 0,
      time: new Date('2021-12-28T00:10:00'),
      content: 'Hi'
    }, {
      groupId: 0,
      userId: 1,
      time: new Date('2021-12-28T00:11:00'),
      content: '🎆🎆🎆'
    }, {
      groupId: 0,
      userId: 3,
      time: new Date('2021-12-28T00:12:00'),
      content: '😁😁😁😁😁😁🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣😁😁😁😁😁😁🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣'
    }, {
      groupId: 0,
      userId: 2,
      time: new Date('2021-12-28T00:13:00'),
      content: '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'
    }, {
      groupId: 0,
      userId: 0,
      time: new Date('2021-12-28T00:14:00'),
      content: '🎆🎆🎆'
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
