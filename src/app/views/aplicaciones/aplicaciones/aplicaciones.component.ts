import { Component } from '@angular/core';
import { Aplicaciones } from 'app/core/interfaces/backend';
import { BackendService } from 'app/core/services/backend.service';
import { Column } from 'app/interfaces/crud-simple';
import { Data } from 'app/shared/dialogs/simple-form/simple-form.component';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss']
})
export class AplicacionesComponent {
  columns: Column[] = [{ key: 'id', name: 'ID' }, { key: 'nombre', name: 'aplicaciones' }]
  data$ = this.api.getAll<Aplicaciones>('aplicaciones')
  dataCreateAndEdit: Data = { api: 'aplicaciones', tabla: 'una aplicacion', inputs: [{ key: 'nombre', name: 'Aplicacion' }] }
  constructor(private api: BackendService) { }

}
