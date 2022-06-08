import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService, BaseType } from 'app/core/services/backend.service';
import { Column, Input } from 'app/interfaces/crud-simple';
import { Observer } from 'rxjs';

export interface Data {
  tabla: string
  inputs: Input[]
  api: BaseType
  editar?: boolean
  id?: number | string
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  formulario: FormGroup
  obs: Observer<any> = {
    next: res => {
      if (res.rowsAffected[res.rowsAffected.length - 1] > 0) {
        this.dialogRef.close()
      }
    },
    error: () => null,
    complete: () => null
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: Data, private fb: FormBuilder, private api: BackendService, private dialogRef: MatDialogRef<SimpleFormComponent>) { }
  ngOnInit(): void {
    const group = this.data.inputs.reduce((acc, cur) => {
      return { ...acc, [cur.key]: [cur.default ? cur.default : '', Validators.required] }
    }, {})
    this.formulario = this.fb.group(group)
    console.log(this.formulario)
  }

  confirmar() {
    if (!this.data.editar) {
      this.api.create<any>(this.data.api, this.formulario.value)
        .subscribe(this.obs)
    } else {
      this.api.editById(this.data.api, this.data.id, this.formulario.value)
        .subscribe(this.obs)
    }
  }

}
