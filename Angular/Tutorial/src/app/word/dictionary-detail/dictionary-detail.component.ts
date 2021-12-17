import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";

import {ParamMap, ActivatedRoute} from "@angular/router";
import {SongService} from "../../service/song.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: any = '';
  mean = '';

  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit()
    :
    void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = paramMap.get('word');
      this.mean = this.dictionaryService.translate(this.word);
    });
  }
}
