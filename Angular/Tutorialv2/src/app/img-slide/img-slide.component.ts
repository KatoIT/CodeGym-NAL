import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  listSrc = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=5',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=6',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=7',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=8',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=9',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=10',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=11',
  ];
  index = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.index === this.listSrc.length-1)
      this.index = 0
    else
      this.index++;
  }

  previous() {
    if (this.index > 0)
      this.index--;
    else
      this.index = this.listSrc.length-1;
  }

}
