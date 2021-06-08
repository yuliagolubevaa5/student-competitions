import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DialogElementComponent, LoginComponent} from './login/login.component';
import {Injectable, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {MaterialModule} from '../../layout/material/material.module';
import {CoreModule} from '../../core/core.module';
import {NgxCaptchaModule} from 'ngx-captcha';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [
    LoginComponent,
    DialogElementComponent
  ],
  imports: [
    LayoutModule,
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatPasswordStrengthModule.forRoot(),
    CoreModule,
    NgxCaptchaModule
  ],
})
export class AuthModule { }
