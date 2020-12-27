import { TiledetailComponent } from './../tiledetail/tiledetail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles.component';

const routes: Routes = [
  {path:'', component: TilesComponent},
  {path:"tiles/:Id",component:TiledetailComponent},

 {path:'**', redirectTo:'tiles'}
];
// 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TilesRoutingModule { }
