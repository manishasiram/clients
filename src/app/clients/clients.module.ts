import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AngularMaterialModule } from '../core/angular-material.module';
import { ClientsComponent } from './clients/clients.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientsComponent, ClientsNewComponent, ClientsInfoComponent]
})
export class ClientsModule { }
