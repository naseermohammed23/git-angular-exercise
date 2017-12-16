import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bow',
  templateUrl: './bow.component.html',
  styleUrls: ['./bow.component.css']
})
export class BowComponent implements OnInit {
  bow: {mntncId: number, mntncName: string};

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
}
