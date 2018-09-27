import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, NgForm, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';
import { AddTier } from '../addtier.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit,OnChanges {
  @Output() selectedCatTier: string = '';
  public myForm: FormGroup;
  dataObj : any;
  catTierData : any;
  catTierObj : AddCatTier;
  tierDataObj : AddTier;
  tierData : any;
  catTierFees : any;
  submitted = false;
  min: FormControl;
  max: FormControl;
  sku: FormControl;
  catFeesNames:string[];
  catTierFeesNames : any;
  catTierControl = new FormControl('', [Validators.required]);
  @Input('clientName') clientName: string;
  @ViewChild('updateForm') updateForm: NgForm;
  @ViewChild('updateCatForm') updateCatForm: NgForm;
  constructor(private _fb: FormBuilder, private httpClient: HttpClient, private router: Router) { 
    this.catTierObj = new AddCatTier;
    // this.tierDataObj = new AddCatTier;
    
    
  }

  ngOnInit() {
    console.log(this.clientName+"in tiers client name");
    // this.getData();
    // this.selectedCatTier ="cat_01_tier_fees";
      this.myForm = this._fb.group({
          tiers: this._fb.array([
              this.initlanguage(),
          ])
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.clientName = changes['clientName'].currentValue;
    console.log(this.clientName + "in tiers")
    this.getCatTierNames();
    this.getTierData();
    this.selectCatTier(event);
  }

  initlanguage() {
      return this._fb.group({
          min: [''],
          max: [''],
          sku: ['']
      });
  }
 
  addTier() {
    const control = <FormArray>this.myForm.controls['tiers'];
    control.push(this.initlanguage());
  }
  selectCatTier(catTier) {
    this.selectedCatTier = catTier;
    console.log(this.selectedCatTier+"selectedCatTier5678");
  }
  
  getCatTierNames() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data[0].cat_tier_fees);
      this.catTierFeesNames=Object.keys(data[0].cat_tier_fees);
      this.catTierData = data[0].cat_tier_fees;
      for(var i in this.catTierData) {
           console.log(i+"cat tier names data");
      }
      console.log(this.catTierData+"CATTIERFEES");
      
    });
}
 
  getTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getTier',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data);
      this.tierData = data[0]['tiers'];
      console.log(this.tierData);
      
      
    });
  }
  onUpdate(){
    console.log(this.updateForm)
    console.log('Form Submitted! in tier update', this.updateForm.value);
    
    this.httpClient.post('http://127.0.0.1:5000/tierUpdate',this.updateForm.value,{params:{data:this.clientName}}).subscribe(tierdata => {
          console.log(tierdata + "4444");
          
          console.log("hello");
        })
  }
  onUpdatecatTier(){
    console.log(this.updateCatForm)
    console.log('Form Submitted! in cat tier update', this.updateCatForm.value);
    
    this.httpClient.post('http://127.0.0.1:5000/catTierUpdate',this.updateCatForm.value,{params:{data:this.clientName,data1:this.selectedCatTier}}).subscribe(tierdata => {
          console.log(tierdata + "4444");
          
          console.log("hello");
        })
  }
  onCat() {
    this.submitted = true;
    
  }
  getCatTier(){
    console.log(this.selectedCatTier+"cattierForm Value");
    this.httpClient.get('http://127.0.0.1:5000/getCatTierData',{params:{data:this.clientName,data1:this.selectedCatTier}}).subscribe(data => {
      console.log(data['cat_fees']+"catTier Fees data");
      console.log(data);
      this.catTierFees = data[0]['cat_fees'];
      console.log(this.catTierFees[0].cat_fees+"cattier fees data model");
      
      
    });
}



}
