import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionesRoutingModule } from './aplicaciones-routing.module';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AplicacionesComponent
  ],
  imports: [
    CommonModule,
    AplicacionesRoutingModule,
    SharedModule
  ]
})
export class AplicacionesModule { }
