import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {MaterialModule} from '../../layout/material/material.module';
import {CoreModule} from '../../core/core.module';
import {NgxCaptchaModule} from 'ngx-captcha';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
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
  ]
})
export class AuthModule { }
