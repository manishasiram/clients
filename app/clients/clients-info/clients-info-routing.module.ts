import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiersComponent } from './tiers/tiers.component';
import { AddCatTierComponent } from './add-cat-tier/add-cat-tier.component';
import { AddTierComponent } from './add-tier/add-tier.component';
import { DetailsComponent } from './details/details.component';
import { StatusFeeComponent } from './status-fee/status-fee.component';



const routes: Routes = [
  {path: 'tiers',  component: TiersComponent},
  {path: 'addTier',  component: AddTierComponent},
  {path: 'addCatTier', component: AddCatTierComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'status-fee', component:StatusFeeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsInfoRoutingModule { }
