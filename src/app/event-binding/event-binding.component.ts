import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  nazwaKlasy: string = 'someFormatting';
  isDisabled: boolean = true;
  tekst: string = 'tekst wejsciowy';
  logoUrl: string = '';
  password: string = 'password';
  on_mouse_move_message: string = 'when you move it is showed in console';

  constructor() {
  }

  ngOnInit() {
  }

  onFocus() {

  }
  onClick(event) {
    console.log(event);
  }
  onMousemove(event: MouseEvent) {
    console.log('x: ' + event.clientX + 'y: ' + event.clientY);
  }
  onPaste(event) {
    this.password = 'password can not be paste';
}

  change() {
    this.nazwaKlasy = 'someFormattingAfterClick';
    this.tekst = 'tekst zmieniony';
    this.logoUrl = 'https://img.icons8.com/ultraviolet/80/000000/mana.png';
    this.isDisabled = true;
  }

}
