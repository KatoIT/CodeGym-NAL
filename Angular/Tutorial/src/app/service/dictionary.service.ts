import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }
  dictionary = [
    {
      word: 'Hello',
      mean: 'Xin chào'
    },
    {
      word: 'Buy',
      mean: 'Mua'
    },
    {
      word: 'Family',
      mean: 'Gia đình'
    },
    {
      word: 'Comment',
      mean: 'Bình luận'
    },
    {
      word: 'Information',
      mean: 'Thông tin'
    },
    {
      word: 'Technology',
      mean: 'Công nghệ'
    }
  ]

  getAll(){
    return this.dictionary;
  }

  translate(word: string){
    for (var dic of this.dictionary) {
      if(dic.word == word)
        return dic.mean;
    }
    return "Word is not exit!";
  }
}
