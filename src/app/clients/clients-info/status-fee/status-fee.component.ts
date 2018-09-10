import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-fee',
  templateUrl: './status-fee.component.html',
  styleUrls: ['./status-fee.component.css']
})
export class StatusFeeComponent implements OnInit,OnChanges {

  dataObj:any;
  @Input('clientName') clientName: string;
  @ViewChild('updateForm') updateForm: NgForm;
  
  constructor(private httpClient:HttpClient) {
  
   }

  
  ngOnInit() {
    console.log(this.clientName);
    this.dataObj=[];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in status")
    this.getData();
  }

  getData() {
    console.log(this.clientName+"getDataaaaa IN STATIC FEE")
    this.httpClient.get('http://127.0.0.1:5000/getStaticFee',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data[0]);
      this.dataObj = data[0];
      console.log(this.dataObj.static_fees.admin+"status fee");
      
    });
    
  }

  onUpdate(){
    alert("Updated Successfully");

    console.log('Form Submitted!', this.updateForm.value);
    this.httpClient.post('http://127.0.0.1:5000/updateStaticFee',this.updateForm.value,{params:{data:this.clientName}}).subscribe(data => {
          console.log(data+"Update");
          console.log("hello");
        })

  }
}