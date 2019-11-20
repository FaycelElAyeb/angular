import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfi-second',
  templateUrl: './second.component.html',
  styles: []
})
export class SecondComponent implements OnInit {

  color= 'red';
  constructor() { }

  ngOnInit() {
  }
  changeColor(color : string) {
    this.color = color;
  }

}
