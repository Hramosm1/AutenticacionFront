import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'app/core/services/backend.service';
import { PermisosEspeciales } from 'app/views/interfaces/permisos-especiales';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-permisos-especiales',
  templateUrl: './permisos-especiales.component.html',
  styleUrls: ['./permisos-especiales.component.scss']
})
export class PermisosEspecialesComponent implements OnInit {
  @Input() aplicacion$: Observable<number>
  roles$ = this.api.getAll<{ id: number, nombre: string }>('roles')
  permisosPorAplicacion$: Observable<PermisosEspeciales[]>
  permisosEspeciales

  constructor(private api: BackendService) { }

  ngOnInit(): void {
    this.permisosPorAplicacion$ = this.aplicacion$
      .pipe(distinctUntilChanged(),
        mergeMap(idAplicacion => this.api.getById<PermisosEspeciales[], number>('permisosEspeciales', idAplicacion)),
      )
    this.permisosEspeciales = combineLatest(this.roles$, this.permisosPorAplicacion$).pipe(map(([roles, permisos]) => roles.map(rol => ({ ...rol, permisos }))))
  }
}
