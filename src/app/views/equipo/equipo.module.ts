import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionDeRolesComponent } from './asignacion-de-roles/asignacion-de-roles.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EquipoRoutingModule } from './equipo-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { NuevoRolPorUsuarioComponent } from './nuevo-rol-por-usuario/nuevo-rol-por-usuario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PipesModule } from 'app/core/pipes/pipes.module';



@NgModule({
  declarations: [
    AsignacionDeRolesComponent,
    NuevoRolPorUsuarioComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    NgxMatSelectSearchModule,
    PipesModule
  ]
})
export class EquipoModule { }
