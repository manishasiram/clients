import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddCatTier } from '../tiers.model';
import { AddTier } from '../addtier.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.css']
})
export class TiersComponent implements OnInit {

  public myForm: FormGroup;
  dataObj : any;
  catTierData : any;
  catTierObj : AddCatTier;
  tierDataObj : AddTier;
  tierData : any;
  submitted = false;
  @Input('clientName') clientName: string;
  constructor(private _fb: FormBuilder,private httpClient : HttpClient, private router: Router) { 
    this.catTierObj = new AddCatTier;
    this.tierDataObj = new AddCatTier;
    
    this.getCatTierData();
    this.getTierData();
  }

  ngOnInit() {
    console.log(this.clientName+"in tiers client name");
    this.getData();
      this.myForm = this._fb.group({
          add: this._fb.array([
              this.initlanguage(),
          ])
      });
  }

  initlanguage() {
      return this._fb.group({
          llimit: [''],
          ulimit: [''],
          sku: ['']
      });
  }
  onAddTier(){
    // this.router.navigate(['tiers/addTier']);
  }
  
  
  getData() {
    const DATA = {'clientName':this.clientName}
    console.log(this.clientName+"getDataaaaa")
    
    // const params = new HttpParams();
    this.httpClient.get('http://127.0.0.1:5000/getDetails',{params:{data:this.clientName}}).subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj);
      
    });
    
  }

   getCatTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getCatTier').subscribe(data => {
      console.log(data);
      this.catTierData = data;
      console.log(this.catTierData);
      
    });
  }
 
  getTierData() {
    this.httpClient.get('http://127.0.0.1:5000/getTier').subscribe(data => {
      console.log(data+"tier data");
      this.tierData = data[0]['tiers'];
      console.log(this.tierData+"tier data model");
      
      
    });
  }

  onCat() {
    this.submitted = true;
    
  }



}
