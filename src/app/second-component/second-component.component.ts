import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent  implements OnInit{
  @Input() myProp: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  handleClick(): void {
    this.newItemEvent.emit("oi pai");
  }
}
