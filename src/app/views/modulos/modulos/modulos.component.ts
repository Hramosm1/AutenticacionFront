import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from 'app/core/services/backend.service';
import { Data } from 'app/shared/dialogs/simple-form/simple-form.component';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit, OnDestroy {
  columns = [{ name: 'ID', key: 'id' }, { name: 'modulo', key: 'nombre' }, { name: 'aplicacion', key: 'aplicacion' }]
  modulos$: Observable<any>
  aplicaciones$ = this.api.getAll('aplicaciones')
  aplicacion = new FormControl()
  dataCAE: Data
  up = new Subject()
  constructor(private api: BackendService) { }

  ngOnInit(): void {
    this.aplicacion.valueChanges.subscribe(id => {
      this.modulos$ = this.api.getById('modulos', id)
      this.up.next(this.modulos$)
      this.dataCAE = { api: 'modulos', inputs: [{ key: 'nombre', name: 'Aplicacion' }, { key: 'idAplicacion', name: 'idAplicacion', default: id }], tabla: 'un modulo' }
    })
  }

  ngOnDestroy(): void {
    this.up.complete()
  }

}
