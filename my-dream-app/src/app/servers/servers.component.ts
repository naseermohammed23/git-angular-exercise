import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  // tslint:disable-next-line:component-selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = false;
  serverName = 'Alpha';
  serverList = ['TestServer', 'DevServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = true;
    this.serverList.push(this.serverName);
  }

  onServerNameUpdate(event) {
    this.serverName = event.target.value;
  }

}
