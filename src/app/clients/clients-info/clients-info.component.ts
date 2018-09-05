import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.css']
})
export class ClientsInfoComponent implements OnInit, OnChanges {
  @Input('clientName') clientName: string;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in clients info comp")
  }

}
