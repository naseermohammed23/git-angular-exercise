import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bow',
  templateUrl: './bow.component.html',
  styleUrls: ['./bow.component.css']
})
export class BowComponent implements OnInit, OnDestroy {
  bow: {mntncId: number, mntncName: string};

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.bow = {
      mntncId: this.route.snapshot.params['id'],
      mntncName: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.bow.mntncId = params['id'];
          this.bow.mntncName = params['name'];
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
