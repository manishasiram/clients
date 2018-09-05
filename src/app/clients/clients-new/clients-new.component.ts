import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {
  @Input() 
  clientName: String;
  constructor() { }

  ngOnInit() {
    // this.clientName = 'Lighthouse';
    // console.log(this.clientName+"ngonit");
    }
  onShowComponent(client) {

    this.clientName = client;
    console.log(this.clientName+"clientnameee");
    
  }
  
}
