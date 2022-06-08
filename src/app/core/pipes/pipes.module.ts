import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuariosPipe } from './filtro-usuarios.pipe';



@NgModule({
  declarations: [
    FiltroUsuariosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroUsuariosPipe
  ]
})
export class PipesModule { }
