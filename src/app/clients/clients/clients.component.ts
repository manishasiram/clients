import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddClient } from './clients.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  name:FormControl;
  addclientForm:FormGroup;
  dataObj:any;
  dataSource = new MatTableDataSource(this.dataObj);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor( private router: Router,private httpClient:HttpClient) { 
    this.dataObj = new AddClient;
    this.createFormControls();
    this.createForm();
  }

  ngOnInit() {
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
    this.httpClient.get('http://127.0.0.1:5000/getClients').subscribe(data => {
      console.log(data);
      this.dataObj = data;
      console.log(this.dataObj);
      
    });
  }
  
}
