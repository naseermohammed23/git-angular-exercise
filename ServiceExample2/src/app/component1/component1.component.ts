import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../comp.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  message:String = "This message from comp2";

  constructor(private compService : ComponentService) {

   }

  ngOnInit() {
  }

  onSubmit() {
    this.compService.statusMessage.emit(this.message);
  }

}
