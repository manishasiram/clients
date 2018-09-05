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





@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientsComponent, ClientsNewComponent, ClientsInfoComponent,TiersComponent,
    AddCatTierComponent,AddTierComponent,DetailsComponent]
})
export class ClientsModule { }
