import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Aplicaciones } from 'app/core/interfaces/backend';
import { BackendService } from 'app/core/services/backend.service';
import { Columns } from 'app/interfaces/crud-simple';
import { tap } from 'rxjs';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss']
})
export class AplicacionesComponent implements OnInit {
  columns: Columns[] = [{ key: 'id', name: 'ID' }, { key: 'nombre', name: 'aplicaciones' }]
  data: MatTableDataSource<Aplicaciones>
  constructor(private api: BackendService) { }

  ngOnInit(): void {
    this.api.getAll<Aplicaciones>('aplicaciones').pipe(tap(console.log)).subscribe(res => this.data = new MatTableDataSource(res))
  }

}
