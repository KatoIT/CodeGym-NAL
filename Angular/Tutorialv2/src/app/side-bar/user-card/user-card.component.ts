import {Component, Input, OnInit} from '@angular/core';
import {Groups} from "../../model/groups";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() group: Groups = {};
  @Input() isSelect: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
