import { Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Column } from 'app/interfaces/crud-simple';
import { Observable, Subscription, tap } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { Data, SimpleFormComponent } from '../dialogs/simple-form/simple-form.component';

@Component({
  selector: 'app-crud-simple',
  templateUrl: './crud-simple.component.html',
  styleUrls: ['./crud-simple.component.scss']
})
export class CrudSimpleComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: Observable<any>
  @Input() columns: Column[]
  @Input() dataCreateAndEdit: Data
  @Input() update: Observable<Observable<any>>
  @Output() editar = new EventEmitter()
  @Output() crear = new EventEmitter()
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource()
  displayedColumns: string[]
  subs: Subscription
  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData()
    if (this.columns) {
      this.displayedColumns = this.columns.map(val => val.key)
      this.displayedColumns.push('actions')
    }
    if (this.update) this.subs = this.update.subscribe((res) => {
      res.subscribe(res => this.dataSource.data = res)
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  ngOnDestroy(): void {
    if (this.subs) this.subs.unsubscribe()
  }
  getData = () => {
    this.data.subscribe(res => this.dataSource.data = res)
  }
  eliminar(id: number | string, name: string) {
    this.dialog
      .open(ConfirmComponent, { disableClose: true, data: { name, id, api: this.dataCreateAndEdit.api } })
      .afterClosed().subscribe(this.getData)
  }
  abrirCrear() {
    this.dialog
      .open(SimpleFormComponent, { data: { ...this.dataCreateAndEdit, editar: false }, disableClose: true })
      .afterClosed().subscribe(this.getData)
  }
  abrirEditar(id: number | string) {
    this.dialog
      .open(SimpleFormComponent, { data: { ...this.dataCreateAndEdit, editar: true, id }, disableClose: true })
      .afterClosed().subscribe(this.getData)
  }

}
