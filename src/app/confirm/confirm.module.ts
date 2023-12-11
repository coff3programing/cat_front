import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { DeniePageComponent } from './pages/denie-page/denie-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { ButtonComponentComponent } from './pages/button-component/button-component.component';


@NgModule({
  declarations: [
    ConfirmPageComponent,
    DeniePageComponent,
    LayoutPageComponent,
    WelcomeComponent,
    ButtonComponentComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    MaterialModule
  ]
})
export class ConfirmModule { }
