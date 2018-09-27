import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: ['./line-items.component.css']
})
export class LineItemsComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'lineItem', 'minAmount', 'maxAmount', 'date'];
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
  lineItem: string;
  sno: number;
  minAmount: number;
  maxAmount: number;
  date: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, lineItem: 'Line item 1', minAmount: 100, maxAmount: 500, date: Date.now()},
  {sno: 2, lineItem: 'Line item 2', minAmount: 501, maxAmount: 1000, date: Date.now()},
  {sno: 3, lineItem: 'Line item 3', minAmount: 1001, maxAmount: 2000, date: Date.now()},
  {sno: 4, lineItem: 'Line item 4', minAmount: 2001, maxAmount: 5000, date: Date.now()},
  {sno: 5, lineItem: 'Line item 5', minAmount: 5001, maxAmount: 10000, date: Date.now()},
  {sno: 6, lineItem: 'Line item 6', minAmount: 10001, maxAmount: 12000, date: Date.now()},
  {sno: 7, lineItem: 'Line item 7', minAmount: 12001, maxAmount: 15000, date: Date.now()},
  {sno: 8, lineItem: 'Line item 8', minAmount: 15001, maxAmount: 20000, date: Date.now()},
  {sno: 9, lineItem: 'Line item 9', minAmount: 20001, maxAmount: 25000, date: Date.now()},
  {sno: 10, lineItem: 'Line item 10', minAmount: 25001, maxAmount: 30000, date: Date.now()},
];
