import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'app/core/services/backend.service';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { groupBy } from 'lodash';
import { Modulo } from 'app/views/interfaces/modulos';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Permiso } from 'app/views/interfaces/permisos';
import { values } from 'lodash';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit, OnDestroy {
  modulos$ = this.api.getAll<Modulo>('modulos')
    .pipe(
      map(val => groupBy(val, 'Aplicaciones.nombre')),
      map(obj => Object.keys(obj)
        .map(key => ({ aplicacion: key, modulos: obj[key] })))
    );
  modulo = new FormControl();
  permisos$: Observable<Permiso[]>;
  formulario: FormGroup;
  permisos: Permiso[];
  aplicacion$ = new BehaviorSubject<number>(0);

  acciones = ['ver', 'crear', 'editar', 'eliminar'];

  constructor(private api: BackendService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.modulo.valueChanges.subscribe((modulo) => {
      this.aplicacion$.next(modulo.Aplicaciones.id);
      this.permisos$ = this.api.getById<Permiso[], number>('permisos', modulo.id);
      this.reset();
    });
  }
  ngOnDestroy(): void {
    this.aplicacion$.complete();
  }
  actualizar() {
    const formularioResult = values(this.formulario.value);
    this.api.actualizarPermisos(formularioResult).subscribe((val) => {
       this.permisos$.subscribe((_) => { this.formulario.reset(); this.reset(); });
    });
  }
  private reset() {
    this.permisos$.subscribe(res => this.permisos = res);
    this.permisos$.pipe(map(val => val
      .map(({ Roles, ver, crear, editar, eliminar, id }) => ({ rol: Roles.id, fg: this.fb.group({ ver, crear, editar, eliminar, id }) }))
      .reduce((cur, { rol, fg }) => ({ ...cur, [rol]: fg }), {})))
      .subscribe((groups) => {
        this.formulario = this.fb.group(groups);
      });
  }
}
