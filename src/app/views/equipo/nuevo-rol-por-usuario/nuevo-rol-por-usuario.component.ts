import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Roles } from 'app/core/interfaces/backend';
import { BackendService } from 'app/core/services/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuevo-rol-por-usuario',
  templateUrl: './nuevo-rol-por-usuario.component.html',
  styleUrls: ['./nuevo-rol-por-usuario.component.scss']
})
export class NuevoRolPorUsuarioComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    idRol: ''
  })
  roles$: Observable<Roles[]>
  constructor(private fb: FormBuilder, private api: BackendService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.roles$ = this.api.getAll<Roles>('roles')
  }

  confirmar() { }

}
