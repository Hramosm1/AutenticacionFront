import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { PermisosComponent } from './permisos/permisos.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    PermisosComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule,
    SharedModule
  ]
})
export class PermisosModule { }
