import {NgModule} from '@angular/core';
import {ProfileComponent} from '../../modules/home/profile/profile.component';
import {ProfileStudentComponent} from '../../modules/home/profile/profile-student/profile-student.component';
import {ProfileTeacherComponent} from '../../modules/home/profile/profile-teacher/profile-teacher.component';
import {DiagramComponent} from '../diagram/diagram.component';
import {ListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../layout/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProfileRoutingModule} from '../../modules/home/profile/profile-routing.module';
import {CoreModule} from '../../core/core.module';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    ListComponent
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
    ListComponent
  ],
})
export class ListModule { }
