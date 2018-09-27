import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';


@Component({
  selector: 'app-add-cat-tier',
  templateUrl: './add-cat-tier.component.html',
  styleUrls: ['./add-cat-tier.component.css']
})
export class AddCatTierComponent implements OnInit,OnChanges {
  @Input('clientName') clientName: string;
  catTierObj : AddCatTier;
  myForm:FormGroup;
  min: FormControl;
  max: FormControl;
  sku: FormControl;
  flag=true;
  value1:any;
  value2:any;
  @Input('catTierName') catTierName: string;
  constructor(private httpClient : HttpClient, private _fb: FormBuilder) { 
    this.catTierObj = new AddCatTier();
    
    
  }

  ngOnInit() {
    this.myForm = this._fb.group({
        add: this._fb.array([
            this.initlanguage(),
        ])
    });
  }  
  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in add tier")
    this.onadd()
    this.catTierName = changes['catTierName'].currentValue;
    console.log(this.catTierName+"Mandejdh");
    // this.catTierMin();
  }
  
initlanguage() {
    return this._fb.group({
        min: [''],
        max: [''],
        sku: ['']
    });
}
onadd(){
  this.httpClient.get('http://127.0.0.1:5000/catTierMin',{params:{data:this.clientName,data1:this.catTierName}}).subscribe(data => {
          this.value1 = data;
          console.log(data+"lower limit")
          console.log("hello");
        })
}
addTier() {
  const control = <FormArray>this.myForm.controls['add'];
  control.push(this.initlanguage());
}
// catTierMin(){
//   this.httpClient.get('http://127.0.0.1:5000/catTierMin',{params:{data:this.clientName,data1:this.catTierName}}).subscribe(data => {
//           this.value2 = data;
//           console.log(data+"lower limit cat tier")
//           console.log("hello");
//         })
// }
onSave(){
  for(var i=0; i< this.myForm.value['add'].length; i++){
    if(this.myForm.value['add'][i].min == ""||this.myForm.value['add'][i].max == ""||this.myForm.value['add'][i].sku == ""){
      alert("Please enter tiers values");
      
    
    }
    else{
      console.log('Form Submitted!', this.myForm.value);
      console.log(this.myForm.value['add'][0].min+"min value");
      console.log(this.clientName+"at add tier on save click");
      this.httpClient.post('http://127.0.0.1:5000/addCatTierData',this.myForm.value['add'],{params:{data:this.clientName,data1:this.catTierName}}).subscribe(tierdata => {
          console.log(tierdata + "4444");
          
          console.log("hello");
        })
    }
  
 }

}

}
