import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Columns } from 'app/interfaces/crud-simple';

@Component({
  selector: 'app-crud-simple',
  templateUrl: './crud-simple.component.html',
  styleUrls: ['./crud-simple.component.scss']
})
export class CrudSimpleComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>
  @Input() columns: Columns[]
  displayedColumns: string[]
  constructor() {
  }

  ngOnInit(): void {
    if (this.columns) {
      this.displayedColumns = this.columns.map(val => val.key)
      this.displayedColumns.push('actions')
    }
  }

}
