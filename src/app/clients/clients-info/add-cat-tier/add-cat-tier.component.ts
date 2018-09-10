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
    
  }
  
initlanguage() {
    return this._fb.group({
        min: [''],
        max: [''],
        sku: ['']
    });
}

addTier() {
  const control = <FormArray>this.myForm.controls['add'];
  control.push(this.initlanguage());
}
onSave(){
  for(var i=0; i< this.myForm.value['add'].length; i++){
  if(this.myForm.value['add'][i].min == ""||this.myForm.value['add'][i].max == ""||this.myForm.value['add'][i].sku == ""){
    var r=confirm("Please enter tiers values");
    if (r==true)
    {
      this.flag = true;
      alert("You pressed OK!");
      this.myForm.reset();
    }
    else
    {
      this.flag = false;
      alert("You pressed Cancel!");
    }
  
  }
  if(this.flag==true){
    console.log('Form Submitted!', this.myForm.value);
    console.log(this.myForm.value['add'][0].min+"min value");
    console.log(this.clientName+"at add tier on save click");
    this.httpClient.post('http://127.0.0.1:5000/addCatTier',this.myForm.value['add'],{params:{data:this.clientName}}).subscribe(tierdata => {
        console.log(tierdata + "4444");
        
        console.log("hello");
      })

  }
  
 }

}

}
