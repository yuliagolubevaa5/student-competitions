import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {AgreementsModule} from '../shared/agreements/agreements.module';
import { HeaderComponent } from './header/header.component';
import {AboutComponent} from './about/about.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {DiagramModule} from '../components/diagram/diagram.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    AgreementsModule,
    LayoutRoutingModule,
    DiagramModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AboutComponent
  ]
})
export class LayoutModule { }
