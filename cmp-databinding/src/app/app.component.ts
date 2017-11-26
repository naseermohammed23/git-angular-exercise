import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number []  = [];
  evenNumbers: number []  = [];

  showNumber(firedNbr: number) {
    if ( firedNbr % 2 === 0 ) {
      this.evenNumbers.push(firedNbr);
    } else {
      this.oddNumbers.push(firedNbr);
    }
  }

}
