import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from 'app/core/services/backend.service';
import { Observable, Subject } from 'rxjs';
import { Data } from 'app/shared/dialogs/simple-form/simple-form.component';

@Component({
  selector: 'app-permisos-especiales',
  templateUrl: './permisos-especiales.component.html',
  styleUrls: ['./permisos-especiales.component.scss']
})
export class PermisosEspecialesComponent implements OnInit {
  dataCAE: Data
  columns = [{ name: 'ID', key: 'id' }, { name: 'permiso', key: 'nombre' }, { name: 'aplicacion', key: 'aplicacion' }]
  aplicaciones$ = this.api.getAll('aplicaciones')
  aplicacion = new FormControl()
  up = new Subject()
  permisos$: Observable<any>
  constructor(private api: BackendService) { }

  ngOnInit(): void {
    this.aplicacion.valueChanges.subscribe(id => {
      this.permisos$ = this.api.getById('permisosEspeciales', id)
      this.up.next(this.permisos$)
      this.dataCAE = { api: 'permisosEspeciales', inputs: [{ key: 'nombre', name: 'permiso' }, { key: 'idAplicacion', name: 'idAplicacion', default: id }], tabla: 'un permiso especial' }
    })
  }

}
