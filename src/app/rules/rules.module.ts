import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule,
    AngularMaterialModule
  ],
  declarations: [RulesComponent]
})
export class RulesModule { }
