import { Component, OnInit } from '@angular/core';
import { BackendService } from 'app/core/services/backend.service';
import { Column } from 'app/interfaces/crud-simple';
import { Data } from 'app/shared/dialogs/simple-form/simple-form.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  data$ = this.api.getAll('roles')
  columns: Column[] = [{ key: 'id', name: 'ID' }, { key: 'nombre', name: 'Rol' }]
  dataCreateAndEdit: Data = { api: 'roles', tabla: 'un rol', inputs: [{ key: 'nombre', name: 'rol' }] }
  constructor(private api: BackendService) { }

  ngOnInit(): void {
  }

}
