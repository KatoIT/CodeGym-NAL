import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  @Input() src = '';
  constructor() { }

  ngOnInit(): void {
  }

}
