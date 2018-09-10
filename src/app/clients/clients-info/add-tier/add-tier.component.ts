import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddTier } from '../addtier.model';


@Component({
  selector: 'app-add-tier',
  templateUrl: './add-tier.component.html',
  styleUrls: ['./add-tier.component.css']
})
export class AddTierComponent implements OnInit,OnChanges {
  
  catTierObj : AddTier;
  tierData : any;
  myForm:FormGroup;
  min: FormControl;
  max: FormControl;
  sku: FormControl;
  flag=true;
  @Input('clientName') clientName: string;
  constructor(private httpClient : HttpClient, private _fb: FormBuilder) { 
    this.catTierObj = new AddTier();
    
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
      this.httpClient.post('http://127.0.0.1:5000/addTier',this.myForm.value['add'],{params:{data:this.clientName}}).subscribe(tierdata => {
          console.log(tierdata + "4444");
          
          console.log("hello");
        })

    }
    
   }

  }
}
