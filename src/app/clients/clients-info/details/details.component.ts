
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Details } from '../details.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsArr:Details[]=[];
  dataObj:any;
  detailsObj : Details;
  @Input('clientName') clientName: string;
  @ViewChild('updateForm') updateForm: NgForm;
  
  


  constructor(private httpClient : HttpClient) {
    this.getData();
    this.detailsObj = new Details;
    
   }

  
  ngOnInit() {
    console.log(this.clientName);
    this.dataObj=[];
  }
  getData() {
    this.httpClient.get('http://127.0.0.1:5000/getDetails').
    
    subscribe(data => {
      console.log(data+"");
      this.dataObj = data;
      console.log(this.dataObj[0].clientName+"heloopppp");
      
      
    });
  
  } 

  onUpdate(detailsObj:Details){
    console.log('Form Submitted!', this.updateForm.value);
    this.detailsObj.name = this.updateForm.value.name;
    this.detailsObj.feesOwner = this.updateForm.value.feeOwner;
    this.detailsObj.email = this.updateForm.value.email;
    this.detailsObj.semail = this.updateForm.value.semail;
    this.detailsObj.created = this.updateForm.value.created;
    this.detailsObj.modified = this.updateForm.value.modified;
    this.detailsObj.emailOpt = this.updateForm.value.emailOpt;
    this.detailsObj.currency = this.updateForm.value.currency;
    this.detailsObj.carrier = this.updateForm.value.carrier;
    this.detailsObj.exchange = this.updateForm.value.exchange;
  
    console.log(this.detailsObj.name+"1123435");
    // this.router.navigate(['cat-tier/tier']);
    const DATA = {
      'llimit':this.dataObj.llimit,
      'ulimit':this.dataObj.ulimit,
      'sku':this.dataObj.sku
    }
    console.log(DATA+"1111");
    this.httpClient.post('http://127.0.0.1:5000/update',this.updateForm.value).subscribe(data => {
          
          console.log(data);
          console.log("hello");
        })

  }
  

}