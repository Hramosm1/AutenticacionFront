import { Pipe, PipeTransform } from '@angular/core';
import { Usuarios } from '../interfaces/backend';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  transform(value: Usuarios[], args: string): Usuarios[] {
    console.log(args)
    if (!value || !args) {
    }
    else {
      return value.filter(val => val.nombre.toLowerCase().includes(args.toLowerCase()))
    }
  }

}
