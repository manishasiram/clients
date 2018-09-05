import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.css']
})
export class ClientsInfoComponent implements OnInit {
  @Input('clientName') clientName: string;
  constructor(private router:Router) { }

  ngOnInit() {
    
  console.log(this.clientName+"in clients info comp")
  }

}
