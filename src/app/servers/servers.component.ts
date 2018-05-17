import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addNewServer = false;
  newServerStatus = 'Server is not created';
  serverName = '';
  serverCreated = false;
  servers = ['CLM_Server', 'MTN_Server'];

  constructor() { 
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  };

  ngOnInit() {
  };

  onAddindNewServer() {
    if (this.serverName === '') {
      this.newServerStatus = 'Please Enter Server Name';
      this.serverCreated = true;
      setTimeout(() => {
        this.serverCreated = false;
      }, 3000);
    } else {
      this.newServerStatus = 'Server is created!! Name is ' + this.serverName;
      this.servers.push(this.serverName);
      this.serverCreated = true;
    }
  };

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  };

  getServersData() {
    return this.serverName;
  }

}
