import {Component, Inject, OnInit} from '@angular/core';
import {BackendService} from '../../../../core/services/backend.service';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UsuarioConRol} from '../../../../interfaces/crud-simple';
import {Roles} from "../../../../core/interfaces/backend";

@Component({
	selector: 'app-modal-editar-rol',
	templateUrl: './modal-editar-rol.component.html',
	styleUrls: ['./modal-editar-rol.component.scss']
})
export class ModalEditarRolComponent {
	roles$ = this.api.getAll<Roles>('roles');
	rolControl = new FormControl(null);

	constructor(private api: BackendService,
							@Inject(MAT_DIALOG_DATA) public data: UsuarioConRol,
							private dialog: MatDialogRef<ModalEditarRolComponent>) {

	}

	actualizarRol(): void {
		const body = {idRol: this.rolControl.value};
		this.api.editById('usuarioPorRol', this.data.id, body).subscribe(() => this.dialog.close());
	}

}
