import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Permiso} from '../../../interfaces/permisos';

@Component({
    selector: 'app-listado-de-permisos',
    templateUrl: './listado-de-permisos.component.html',
    styleUrls: ['./listado-de-permisos.component.scss']
})
export class ListadoDePermisosComponent implements OnInit {

    @Input() formulario: FormGroup;

    @Input() actualizar: () => void;

    @Input() permisos$: Observable<Permiso[]>;

    @Input() permisos: Permiso[];

    @Input() acciones: string[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
