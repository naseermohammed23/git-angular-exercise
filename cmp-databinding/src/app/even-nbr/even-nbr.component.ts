import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-nbr',
  templateUrl: './even-nbr.component.html',
  styleUrls: ['./even-nbr.component.css']
})
export class EvenNbrComponent implements OnInit {

  @Input() evenNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
