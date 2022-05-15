import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  columns = [{ name: 'test', key: 'test' }]
  data: MatTableDataSource<any>
  constructor() { }

  ngOnInit(): void {
    this.data = new MatTableDataSource([{ test: 'exemplo' }])
  }

}
