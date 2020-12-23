import { SharedModule } from './../../shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileComponent } from './../tile/tile.component';
import { AuthenticationGuard } from './../../authentication.guard';
import { TilesComponent } from './tiles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesRoutingModule } from './tiles-routing.module';
import { TiledetailComponent } from '../tiledetail/tiledetail.component';


@NgModule({
  declarations: [TilesComponent,
    TileComponent,
    TiledetailComponent,
    ],

  imports: [
    CommonModule,
    TilesRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class TilesModule { }
