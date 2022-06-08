import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'app/core/interfaces/backend';
import { BackendService } from 'app/core/services/backend.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  dataSource: MatTableDataSource<Usuarios> = new MatTableDataSource()
  displayedColumns = ['nombre', 'usuario', 'correo']
  buscador: FormControl = new FormControl()
  constructor(private api: BackendService) { }

  ngOnInit(): void {
    this.buscador.valueChanges.subscribe(str => this.dataSource.filter = str)
    this.api.getAll<Usuarios>('usuarios').pipe(tap(console.log)).subscribe(res => {
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator

      this.dataSource.filter = this.buscador.value
    })
  }

}
