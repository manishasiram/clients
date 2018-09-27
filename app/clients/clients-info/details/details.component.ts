
import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Details } from '../details.model';
import { NgForm } from '@angular/forms';
import { MatCheckbox } from '@angular/material';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
  detailsArr:Details[]=[];
  dataObj:any;
  detailsObj : Details;
  submitted=false;
  @Input('clientName') clientName: string;
  @ViewChild('updateForm') updateForm: NgForm;
  @ViewChild('myCheckbox') private myCheckbox: MatCheckbox;
  my:string;
  
  


  constructor(private httpClient : HttpClient) {
    
    this.detailsObj = new Details;
    console.log(this.myCheckbox+"checkbox");
   }

  
  ngOnInit() {
    
    console.log(this.clientName);
    this.dataObj=[];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in details")
    this.getData();
  }

  getData() {
    const DATA = {'clientName':this.clientName}
    console.log(this.clientName+"getDataaaaa")
    
    // const params = new HttpParams();
    this.httpClient.get('http://127.0.0.1:5000/getDetails',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj[0].clientName+"11111111");
      
    });
    
  }

  onUpdate(){
    this.submitted=true;
    
    console.log('Form Submitted!', this.updateForm.value);
    this.my = String(this.myCheckbox.checked);
    console.log(this.my+"checkbox");
    // this.detailsObj.name = this.updateForm.value.name;
    // this.detailsObj.feesOwner = this.updateForm.value.feeOwner;
    // this.detailsObj.email = this.updateForm.value.email;
    // this.detailsObj.semail = this.updateForm.value.semail;
    // this.detailsObj.created = this.updateForm.value.created;
    // this.detailsObj.modified = this.updateForm.value.modified;
    // this.detailsObj.emailOpt = this.updateForm.value.emailOpt;
    // this.detailsObj.currency = this.updateForm.value.currency;
    // this.detailsObj.carrier = this.updateForm.value.carrier;
    // this.detailsObj.exchange = this.updateForm.value.exchange;
  
    // console.log(this.detailsObj.name+"1123435");
    // // this.router.navigate(['cat-tier/tier']);
    // const DATA = {
    //   'llimit':this.dataObj.llimit,
    //   'ulimit':this.dataObj.ulimit,
    //   'sku':this.dataObj.sku
    // }
    // console.log(DATA+"1111");
    let regexp = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.updateForm.value.email!="" && !regexp.test(this.updateForm.value.email))
    {
      alert("Enter valid email");
      this.updateForm.value.email.reset();
    }
    if(this.updateForm.value.semail!="" && !regexp.test(this.updateForm.value.semail))
    {
      alert("Enter valid secondary email");
      this.updateForm.value.semail.reset();
    }
    // let curexp=(/^[0-9]+(\.[0-9]{1,2})?$/);
    // if(this.updateForm.value.currency!="" && !curexp.test(this.updateForm.value.currency)){
    //   alert("Enter valid currency");
    //   this.updateForm.value.currency.reset();
    // }
    alert("Updated Successfully");
    this.httpClient.post('http://127.0.0.1:5000/update',this.updateForm.value,{params:{data:this.my}}).subscribe(data => {
      
          console.log(data);
          console.log("hello");
        })

  }
  

}