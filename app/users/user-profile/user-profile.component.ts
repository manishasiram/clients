import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight'];
  dataSource = new MatTableDataSource([
    {name: 'Name', weight: 'Seneca Global'},
    {name: 'Email', weight: 'test@test.com'},
    {name: 'Mobile', weight: '9999999999'}
  ]);
  constructor() { }

  ngOnInit() {
  }

}
