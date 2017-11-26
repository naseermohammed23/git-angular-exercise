import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-nbr',
  templateUrl: './odd-nbr.component.html',
  styleUrls: ['./odd-nbr.component.css']
})
export class OddNbrComponent implements OnInit {
  @Input() oddNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
