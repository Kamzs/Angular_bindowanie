import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-bindowanie-jednostronne',
  templateUrl: './bindowanie-jednostronne.component.html',
  styleUrls: ['./bindowanie-jednostronne.component.css']
})
export class BindowanieJednostronneComponent implements OnInit {

  nazwaKlasy: string = 'someFormatting';
  isDisabled: boolean = true;
  tekst: string = 'tekst wejsciowy';
  logoUrl: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  change(){
    this.nazwaKlasy = 'someFormattingAfterClick';
    this.tekst = 'tekst zmieniony';
    this.logoUrl = 'https://img.icons8.com/ultraviolet/80/000000/mana.png';
    this.isDisabled = false;
  }

}
