import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { DeniePageComponent } from './pages/denie-page/denie-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


@NgModule({
  declarations: [
    ConfirmPageComponent,
    DeniePageComponent,
    LayoutPageComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule
  ]
})
export class ConfirmModule { }
