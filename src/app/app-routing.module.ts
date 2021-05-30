import {NgModule} from '@angular/core';
import {DiagramComponent} from './components/diagram/diagram.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './modules/auth/login/login.component';
import {AuthModule} from './modules/auth/auth.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => AuthModule },
  // { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', canActivate: [AuthGuard, UserGuard] },
  // { path: 'panel', loadChildren: './modules/admin.module#PanelModule', canActivate: [AuthGuard, AdminGuard] },
  {path: 'profile', component: DiagramComponent},
  { path: '**', redirectTo: '/auth/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
