import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modyfzmiennych-napodstawie-eventow',
  templateUrl: './modyfzmiennych-napodstawie-eventow.component.html',
  styleUrls: ['./modyfzmiennych-napodstawie-eventow.component.css']
})
export class ModyfzmiennychNapodstawieEventowComponent implements OnInit {

  auto: string = 'astra';

  constructor() { }

  ngOnInit() {
  }

  modyfAuto(event) {
    this.auto = event.target.value;
  }

}
