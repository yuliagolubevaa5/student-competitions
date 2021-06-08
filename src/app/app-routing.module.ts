import {NgModule} from '@angular/core';
import {DiagramComponent} from './components/diagram/diagram.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './modules/auth/auth.module';
import {AuthGuard} from './core/guards/auth.guard';
import {UserGuard} from './core/guards/user.guard';
import {ProfileModule} from './modules/home/profile/profile.module';
import {LayoutModule} from './layout/layout.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'profile', loadChildren: () => ProfileModule},
  { path: 'about', loadChildren: () => LayoutModule},
  // { path: 'panel', loadChildren: './modules/admin.module#PanelModule', canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: '/auth/login'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
