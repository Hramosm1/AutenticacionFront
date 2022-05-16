import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudSimpleComponent } from './crud-simple/crud-simple.component';
import { TitleComponent } from './title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { DialogsModule } from './dialogs/dialogs.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        DialogsModule,
        MatPaginatorModule
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
        TitleComponent
    ]
})
export class SharedModule {
}
