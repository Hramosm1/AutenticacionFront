import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosEspecialesComponent } from './permisos-especiales/permisos-especiales.component';

const routes: Routes = [
  { path: '', component: PermisosEspecialesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosEspecialesRoutingModule { }
