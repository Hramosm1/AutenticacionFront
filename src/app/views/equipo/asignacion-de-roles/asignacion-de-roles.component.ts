import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {BackendService} from 'app/core/services/backend.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
	selector: 'app-asignacion-de-roles',
	templateUrl: './asignacion-de-roles.component.html',
	styleUrls: ['./asignacion-de-roles.component.scss']
})
export class AsignacionDeRolesComponent implements OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	aplicaciones$: Observable<any>;
	aplicacion: FormControl;
	buscador: FormControl;
	dataSource: MatTableDataSource<any>;
	dialogRef: MatDialogRef<any>;
	displayedColumns: string[];

	constructor(private api: BackendService, private dialog: MatDialog) {
		this.displayedColumns = ['nombre', 'usuario', 'rol', 'editar'];
		this.aplicacion = new FormControl(null, Validators.required);
		this.buscador = new FormControl('');
		this.dataSource = new MatTableDataSource<any>();
		this.aplicaciones$ = this.api.getAll('aplicaciones');
	}

	ngOnInit(): void {
		this.aplicacion.valueChanges
			.pipe(switchMap(aplicacion => this.api.getById<any, number>('usuarioPorRol', aplicacion)))
			.subscribe((data) => {
				this.dataSource.data = data;
				this.dataSource.paginator = this.paginator;
				this.buscador.reset();
			});
		this.buscador.valueChanges
			.subscribe(texto => this.dataSource.filter = texto);
	}

	editar(id: number): void {
		console.log(id);
	}
}
