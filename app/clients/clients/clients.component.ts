import { Component, OnInit, EventEmitter, ViewChild, Output } from '@angular/core';
import {MatTableDataSource, MatSelectionList, MatSelectionListChange} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddClient } from './clients.model';
import { Details } from '../clients-info/details.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  name:FormControl;
  addclientForm:FormGroup;
  detailsObj:Details;
  dataObj:any;
  dataSource = new MatTableDataSource(this.dataObj);
  @ViewChild(MatSelectionList) clientName: MatSelectionList;
  @Output() valueChange = new EventEmitter();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor( private router: Router,private httpClient:HttpClient) { 
    this.dataObj = new AddClient;
    this.valueChange.emit(this.clientName);
    console.log(this.clientName);
    this.createFormControls();
    this.createForm();
  }

  ngOnInit() {
    console.log(this.clientName+"in clients")
    this.clientName.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.clientName.deselectAll();
      s.option.selected = true;
      this.valueChange.emit(s.option.value);
    });
    this.getData();
  }
  createFormControls() {
    this.name = new FormControl('', [
      Validators.required
    ]);
    
  }

  createForm() {
    this.addclientForm = new FormGroup({
      name: this.name
    });
  }
  
  onSubmit(){
    if(this.addclientForm.value.name == "" ||this.addclientForm.value.name== "null" ){
      alert("Please enter a valid name for client");
      this.addclientForm.reset();
    }
    else{
      console.log('Form Submitted!', this.addclientForm.value);
    this.dataObj.name= this.addclientForm.value.name;
    
    console.log(this.dataObj);
    const DATA = {
      'name':this.dataObj.name
    }
    this.addclientForm.reset();
    console.log(DATA+"1111");
    this.httpClient.post('http://127.0.0.1:5000/addClients',DATA).subscribe(data=>{
      console.log(data+"data");
    this.dataObj.push(data);
    });
    }
    
  }
  getData() {
    console.log("jdghhg")
    this.httpClient.get('http://127.0.0.1:5000/getClients').subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj);
      
    });
  }
  
}
