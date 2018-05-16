import { Component } from "@angular/core";

@Component({
    // selector: 'app-server', //This is selector with element we declare it as <app-server></app-server> 
    selector: '[app-server]', //This is selector with attribute we declare it as <div app-server></div>
    // selector: '.app-server', // This is selector with class we declare it as <div class="app-server"></div>
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID:number = 10;
    serverStatus:string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    };
}