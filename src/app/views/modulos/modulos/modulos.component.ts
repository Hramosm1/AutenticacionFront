import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from 'app/core/services/backend.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  columns = [{ name: 'test', key: 'test' }]
  data$ = this.api.getAll('modulos')
  constructor(private api: BackendService) { }

  ngOnInit(): void {
  }

}
