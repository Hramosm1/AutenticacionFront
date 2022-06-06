import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudSimpleComponent } from './crud-simple/crud-simple.component';
import { TitleComponent } from './title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { DialogsModule } from './dialogs/dialogs.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        DialogsModule,
        MatDialogModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CrudSimpleComponent,
        TitleComponent
    ],
    declarations: [
        CrudSimpleComponent,
        TitleComponent,
        TablaUsuariosComponent
    ]
})
export class SharedModule {
}
