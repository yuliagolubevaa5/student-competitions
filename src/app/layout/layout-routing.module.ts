import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../modules/auth/login/login.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'us', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
