import {NgModule} from '@angular/core';
import {List6Component} from '../list6/list6.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../layout/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProfileRoutingModule} from '../../modules/home/profile/profile-routing.module';
import {CoreModule} from '../../core/core.module';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {List8Component} from './list8.component';

@NgModule({
  declarations: [
    List8Component
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
    List8Component
  ],
})
export class List8Module { }
