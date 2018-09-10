import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {
  clientName: String;
  constructor() { }

  ngOnInit() {
    this.clientName = 'None';
    // console.log(this.clientName+"ngonit");
    }
  onShowComponent(client) {

    this.clientName = client;
    console.log(client+"clientnameee");
    
  }
  
}
