import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html'
})
export class WordlistComponent implements OnInit {
  data;
  p: number = 1;

  constructor(private words:WordService){}
  
  ngOnInit() {
    this.words.get().subscribe(x=>this.data=x)
  }
}
