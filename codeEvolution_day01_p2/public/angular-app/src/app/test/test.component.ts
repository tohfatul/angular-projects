import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  // @Input() public parentData!:string
  @Input('parentData') public name!:string
  @Output() public childEvent = new EventEmitter<string>();

  constructor(){}
  ngOnInit(){}

  emitEvent(){
    this.childEvent.emit('Hello, this message is from child');
  }
}
