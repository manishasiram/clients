import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { LineItemsRoutingModule } from './line-items-routing.module';
import { LineItemsComponent } from './line-items/line-items.component';

@NgModule({
  imports: [
    CommonModule,
    LineItemsRoutingModule,
    AngularMaterialModule
  ],
  declarations: [LineItemsComponent]
})
export class LineItemsModule { }
