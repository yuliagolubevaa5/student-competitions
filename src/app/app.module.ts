import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './layout/material/material.module';
import {LayoutModule} from './layout/layout.module';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import { PanelAdminComponent } from './modules/home/panel/panel-admin/panel-admin.component';
import { PanelManagerCompetencyComponent } from './modules/home/panel/panel-manager-competency/panel-manager-competency.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    PanelAdminComponent,
    PanelManagerCompetencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatPasswordStrengthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
