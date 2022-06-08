import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from 'app/core/services/backend.service';
import { switchMap, tap } from 'rxjs/operators';
import { NuevoRolPorUsuarioComponent } from '../nuevo-rol-por-usuario/nuevo-rol-por-usuario.component';

@Component({
  selector: 'app-asignacion-de-roles',
  templateUrl: './asignacion-de-roles.component.html',
  styleUrls: ['./asignacion-de-roles.component.scss']
})
export class AsignacionDeRolesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  aplicaciones$ = this.api.getAll('aplicaciones')
  aplicacion = new FormControl(null, Validators.required)
  dataSource = new MatTableDataSource<any>();
  dialogRef: MatDialogRef<any>

  constructor(private api: BackendService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.aplicacion.valueChanges
      .pipe(switchMap(aplicacion => this.api.getById<any, number>('usuarioPorRol', aplicacion)))
      .subscribe(data => {
        this.dataSource.data = data
        this.dataSource.paginator = this.paginator
      })
  }
  abrirCrear() {
    this.dialogRef = this.dialog.open(NuevoRolPorUsuarioComponent, { width: '80vw', disableClose: true, data: this.aplicacion.value })

  }
}
