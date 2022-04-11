import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionesRoutingModule } from './aplicaciones-routing.module';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';


@NgModule({
  declarations: [
    AplicacionesComponent
  ],
  imports: [
    CommonModule,
    AplicacionesRoutingModule
  ]
})
export class AplicacionesModule { }
