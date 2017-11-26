import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, OnChanges {
  @Output() showText = new EventEmitter<string>();
  cmpName = '';

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  ngOnInit() {
  }

  onShowText() {
    // alert('test');
    this.showText.emit(this.cmpName);
  }

}
