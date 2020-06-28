import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enter-pin',
  templateUrl: './enter-pin.component.html',
  styleUrls: ['./enter-pin.component.scss'],
})
export class EnterPinComponent implements OnInit {
    @Input() pagetitle: string = "Enter Pin";
    pin: string = '';

  constructor() { }

  ngOnInit() {}

  handleInput(pin: string) {
      if (pin === 'clear') {
          this.pin = '';
          return;
      }

      if (this.pin.length === 4) {
          return;
      }

      this.pin += pin;
      console.log(this.pin);
  }

  allDone() {
      console.log('DONE!');
  }
}
