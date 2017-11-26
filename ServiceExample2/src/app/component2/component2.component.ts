import { Component, OnInit } from '@angular/core';

import { ComponentService } from '../comp.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  statusMessage: String = "Hi Naseer";
  constructor(private compService: ComponentService) {  
    this.compService.statusMessage.subscribe(
      (status:String) => this.statusMessage = status
    );
  }

  ngOnInit() {
  }

}
