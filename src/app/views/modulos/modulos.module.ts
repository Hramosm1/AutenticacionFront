import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    SharedModule
  ]
})
export class ModulosModule { }
