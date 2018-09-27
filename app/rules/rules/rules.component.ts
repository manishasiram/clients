import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'rule', 'client', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  rule: string;
  sno: number;
  client: String;
  date: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, rule: 'Rule 1', client: 'Client 1', date: Date.now()},
  {sno: 2, rule: 'Rule 1', client: 'Client 2', date: Date.now()},
  {sno: 3, rule: 'Rule 1', client: 'Client 3', date: Date.now()},
  {sno: 4, rule: 'Rule 1', client: 'Client 4', date: Date.now()},
  {sno: 5, rule: 'Rule 1', client: 'Client 5', date: Date.now()},
  {sno: 6, rule: 'Rule 1', client: 'Client 6', date: Date.now()},
  {sno: 7, rule: 'Rule 1', client: 'Client 7', date: Date.now()},
  {sno: 8, rule: 'Rule 1', client: 'Client 8', date: Date.now()},
  {sno: 9, rule: 'Rule 1', client: 'Client 9', date: Date.now()},
  {sno: 10, rule: 'Rule 1', client: 'Client 10', date: Date.now()},
];
