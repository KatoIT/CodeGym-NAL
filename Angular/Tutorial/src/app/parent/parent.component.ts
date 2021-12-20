import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  formControl = new FormControl('', );
  person = {
    name: ''
  }
  name = ""
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
