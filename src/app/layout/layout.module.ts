import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {AgreementsModule} from '../shared/agreements/agreements.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    AgreementsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class LayoutModule { }
