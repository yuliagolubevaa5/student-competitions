import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {NgModule} from '@angular/core';
import {ProfileStudentComponent} from './profile-student/profile-student.component';
import {ProfileTeacherComponent} from './profile-teacher/profile-teacher.component';
import {PanelAdminComponent} from '../panel/panel-admin/panel-admin.component';
import {PanelManagerCompetencyComponent} from '../panel/panel-manager-competency/panel-manager-competency.component';

const routes: Routes = [
  { path: '',
    component: ProfileComponent,
    children: [
      { path: 'profile-student', component: ProfileStudentComponent },
      { path: 'profile-teacher', component: ProfileTeacherComponent },
      { path: 'profile-admin', component: PanelAdminComponent },
      { path: 'profile-manager-competency', component: PanelManagerCompetencyComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
