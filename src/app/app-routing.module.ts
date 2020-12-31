import { TileComponent } from './tiles/tile/tile.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import {AuthenticationGuard} from './authentication.guard';

import {TilesModule} from './tiles/tiles/tiles.module'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'tiles',pathMatch:'prefix',

    loadChildren:'./tiles/tiles/tiles.module#TilesModule'

  },
  { path: 'welcome',
  component: WelcomeComponent },
  {path:"register",
  component : RegisterComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
