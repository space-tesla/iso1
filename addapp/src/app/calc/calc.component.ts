import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  a: number = 0;
  b: number = 0;
  show: boolean = true;

  add() {
    this.show = true;
  }

  toggle() {
    this.show = !this.show;
  }
}
