import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineItemsComponent } from './line-items/line-items.component';

const routes: Routes = [
  { path: 'list',  component: LineItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineItemsRoutingModule { }
