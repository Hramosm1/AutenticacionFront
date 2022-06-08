import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsignacionDeRolesComponent } from "./asignacion-de-roles/asignacion-de-roles.component";

const routes: Routes = [
  { path: '', component: AsignacionDeRolesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoRoutingModule { }
