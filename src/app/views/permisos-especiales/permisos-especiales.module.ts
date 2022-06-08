import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosEspecialesRoutingModule } from './permisos-especiales-routing.module';
import { PermisosEspecialesComponent } from './permisos-especiales/permisos-especiales.component';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PermisosEspecialesComponent
  ],
  imports: [
    CommonModule,
    PermisosEspecialesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class PermisosEspecialesModule { }
