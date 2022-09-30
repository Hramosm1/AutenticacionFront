import {AfterViewChecked, AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Roles, Usuarios} from 'app/core/interfaces/backend';
import {BackendService} from 'app/core/services/backend.service';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TablaUsuariosComponent} from 'app/shared/tabla-usuarios/tabla-usuarios.component';

@Component({
	selector: 'app-nuevo-rol-por-usuario',
	templateUrl: './nuevo-rol-por-usuario.component.html',
	styleUrls: ['./nuevo-rol-por-usuario.component.scss']
})
export class NuevoRolPorUsuarioComponent implements OnInit {
	formulario: FormGroup = this.fb.group({
		idRol: ''
	});
	buscador = this.fb.control('');
	roles$: Observable<Roles[]>;
	usuarios: Usuarios[];
	buscadorConDelay$: Observable<string>;
	usuario: Usuarios;

	constructor(private fb: FormBuilder,
							private api: BackendService,
							@Inject(MAT_DIALOG_DATA) public data: any,
							private dialog: MatDialog) {
	}

	ngOnInit(): void {
		this.roles$ = this.api.getAll<Roles>('roles');
		this.api.getAll<Usuarios>('usuarios').subscribe(res => this.usuarios = res);
	}

	seleccionarUsuario() {
		this.dialog.open(TablaUsuariosComponent, {width: '80vw'})
			.afterClosed().subscribe(res => this.usuario = res);
	}

	confirmar() {
	}

}
