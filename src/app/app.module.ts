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
import {ProfileModule} from './modules/home/profile/profile.module';
import {AuthModule} from './modules/auth/auth.module';
import {metaReducers, reducers} from './core/store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DiagramModule} from './components/diagram/diagram.module';
import {Effects} from './core/store/effects';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ProfileModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        LayoutModule,
        DiagramModule,
        MatPasswordStrengthModule,
        AuthModule,
        StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
      EffectsModule.forRoot(Effects),
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
