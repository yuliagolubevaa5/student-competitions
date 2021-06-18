import {NgModule} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../layout/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProfileRoutingModule} from '../../modules/home/profile/profile-routing.module';
import {CoreModule} from '../../core/core.module';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {List6Component} from './list6.component';

@NgModule({
  declarations: [
    List6Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProfileRoutingModule,
    CoreModule,
    MatPasswordStrengthModule.forRoot(),
  ],
  exports: [
    List6Component
  ],
})
export class List6Module { }
