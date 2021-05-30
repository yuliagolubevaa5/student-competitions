import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../layout/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '../../../core/core.module';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileTeacherComponent
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
  providers: [
    // UserinfoService
  ]
})
export class ProfileModule { }
