import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'invoiceNumber', 'amount', 'date'];
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
  invoiceNumber: string;
  sno: number;
  amount: number;
  date: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, invoiceNumber: 'ABC123456', amount: 10079, date: Date.now()},
  {sno: 2, invoiceNumber: 'ABC123456', amount: 40026, date: Date.now()},
  {sno: 3, invoiceNumber: 'ABC123456', amount: 6941, date: Date.now()},
  {sno: 4, invoiceNumber: 'ABC123456', amount: 90122, date: Date.now()},
  {sno: 5, invoiceNumber: 'ABC123456', amount: 10811, date: Date.now()},
  {sno: 6, invoiceNumber: 'ABC123456', amount: 120107, date: Date.now()},
  {sno: 7, invoiceNumber: 'ABC123456', amount: 140067, date: Date.now()},
  {sno: 8, invoiceNumber: 'ABC123456', amount: 159994, date: Date.now()},
  {sno: 9, invoiceNumber: 'ABC123456', amount: 189984, date: Date.now()},
  {sno: 10, invoiceNumber: 'ABC123456', amount: 201797, date: Date.now()},
];
