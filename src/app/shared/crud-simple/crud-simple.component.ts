import { Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Column } from 'app/interfaces/crud-simple';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { Data, SimpleFormComponent } from '../dialogs/simple-form/simple-form.component';

@Component({
  selector: 'app-crud-simple',
  templateUrl: './crud-simple.component.html',
  styleUrls: ['./crud-simple.component.scss']
})
export class CrudSimpleComponent implements OnInit, AfterViewInit {
  @Input() data: Observable<any>
  @Input() columns: Column[]
  @Input() dataCreateAndEdit: Data
  @Output() editar = new EventEmitter()
  @Output() crear = new EventEmitter()
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource()
  displayedColumns: string[]
  dialogRef: MatDialogRef<ConfirmComponent | SimpleFormComponent>
  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData()
    if (this.columns) {
      this.displayedColumns = this.columns.map(val => val.key)
      this.displayedColumns.push('actions')
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  getData = () => {
    this.data.subscribe(res => this.dataSource.data = res)
  }
  eliminar(id: number | string, name: string) {
    this.dialogRef = this.dialog.open(ConfirmComponent, { disableClose: true, data: { name, id, api: this.dataCreateAndEdit.api } })
    this.dialogRef.afterClosed().subscribe(this.getData)
  }
  abrirCrear() {
    this.dialogRef = this.dialog.open(SimpleFormComponent, { data: { ...this.dataCreateAndEdit, editar: false }, disableClose: true })
    this.dialogRef.afterClosed().subscribe(this.getData)
  }
  abrirEditar(id: number | string) {
    this.dialogRef = this.dialog.open(SimpleFormComponent, { data: { ...this.dataCreateAndEdit, editar: true, id }, disableClose: true })
    this.dialogRef.afterClosed().subscribe(this.getData)
  }

}