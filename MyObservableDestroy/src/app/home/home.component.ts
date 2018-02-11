import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  myNumbersSubscription: Subscription;

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    this.myNumbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

  }

  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe();
  }

}
