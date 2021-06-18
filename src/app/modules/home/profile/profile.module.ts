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
import {List2Module} from '../../../components/list2/list2.module';
import {List3Module} from '../../../components/list3/list3.module';
import {List4Module} from '../../../components/list4/list4.module';
import {List5Module} from '../../../components/list5/list5.module';
import {List6Module} from '../../../components/list6/list6.module';
import {List7Module} from '../../../components/list7/list7.module';
import {List8Module} from '../../../components/list8/list8.module';
import {List9Module} from '../../../components/list9/list9.module';

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
    List2Module,
    List3Module,
    List4Module,
    List5Module,
    List6Module,
    List7Module,
    List8Module,
    List9Module,
    StoreModule.forFeature('CompetenceModule', reducers, {metaReducers}),
    EffectsModule.forFeature([
      CompetitionsEffects,
    ])
  ],
  exports: [
  ],
})
export class ProfileModule { }
