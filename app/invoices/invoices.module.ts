import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    AngularMaterialModule
  ],
  declarations: [InvoicesComponent]
})
export class InvoicesModule { }
