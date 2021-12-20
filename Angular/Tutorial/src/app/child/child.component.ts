import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name?: string;
  @Input() person: any;
  formControl = new FormControl('')
  constructor() { }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(
      value => {
        this.person.name = value
        this.name = value
      }
    )
  }

}
