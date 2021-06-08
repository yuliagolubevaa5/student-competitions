import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../layout/material/material.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgreementsModule} from '../../shared/agreements/agreements.module';
import {DiagramComponent} from './diagram.component';

@NgModule({
  declarations: [
    DiagramComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    AgreementsModule,
  ],
  exports: [
    DiagramComponent
  ]
})
export class DiagramModule { }
