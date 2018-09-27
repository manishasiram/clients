import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsInfoRoutingModule } from './clients-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { DetailsComponent } from './details/details.component';
import { StatusFeeComponent } from './status-fee/status-fee.component';
import { CatTierFeesComponent } from './cat-tier-fees/cat-tier-fees.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsInfoRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [DetailsComponent, StatusFeeComponent, CatTierFeesComponent]
})
export class ClientsInfoModule { }
