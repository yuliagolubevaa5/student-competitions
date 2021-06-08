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
import {DiagramComponent} from '../../../components/diagram/diagram.component';
import {ListModule} from '../../../components/list/list.module';
import {metaReducers, reducers} from '../../../core/store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CompetitionsEffects} from '../../../core/store/effects/competitions.effects';
import {DiagramModule} from '../../../components/diagram/diagram.module';
import {PanelAdminComponent} from '../panel/panel-admin/panel-admin.component';
import {PanelManagerCompetencyComponent} from '../panel/panel-manager-competency/panel-manager-competency.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileTeacherComponent,
    PanelAdminComponent,
    PanelManagerCompetencyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProfileRoutingModule,
    DiagramModule,
    CoreModule,
    ListModule,
    StoreModule.forFeature('CompetenceModule', reducers, {metaReducers}),
    EffectsModule.forFeature([
      CompetitionsEffects,
    ])
  ],
  exports: [
  ],
})
export class ProfileModule { }
