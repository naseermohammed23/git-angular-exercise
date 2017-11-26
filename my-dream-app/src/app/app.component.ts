import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cmp2Element = 'Naseer';

  onShowText(newCmpName: string) {
    this.cmp2Element = newCmpName;
  }
}
