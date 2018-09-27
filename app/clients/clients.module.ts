import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AngularMaterialModule } from '../core/angular-material.module';
import { ClientsComponent } from './clients/clients.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { TiersComponent } from './clients-info/tiers/tiers.component';
import { AddCatTierComponent } from './clients-info/add-cat-tier/add-cat-tier.component';
import { AddTierComponent } from './clients-info/add-tier/add-tier.component';
import { DetailsComponent } from './clients-info/details/details.component';
import { StatusFeeComponent } from './clients-info/status-fee/status-fee.component';
import { CatTierFeesComponent, DialogOverviewExampleDialog } from './clients-info/cat-tier-fees/cat-tier-fees.component';





@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CatTierFeesComponent,DialogOverviewExampleDialog],
  declarations: [ClientsComponent, ClientsNewComponent, ClientsInfoComponent,TiersComponent,
    AddCatTierComponent,AddTierComponent,DetailsComponent, StatusFeeComponent,CatTierFeesComponent,DialogOverviewExampleDialog]
})
export class ClientsModule { }
