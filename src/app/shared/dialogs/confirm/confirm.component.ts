import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService, BaseType } from 'app/core/services/backend.service';
export interface ConfirmData {
  api: BaseType,
  id: number | string
  name: string
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmData, private api: BackendService, private dialogRef: MatDialogRef<ConfirmComponent>) { }

  confirmar() {
    this.api.delete(this.data.api, this.data.id).subscribe(res => {
      this.dialogRef.close()
    })
  }
}
