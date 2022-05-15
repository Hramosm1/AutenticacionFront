import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudSimpleComponent } from './crud-simple/crud-simple.component';
import { CreateComponent } from './crud-simple/create/create.component';
import { TitleComponent } from './title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule
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
        CreateComponent,
        TitleComponent
    ]
})
export class SharedModule {
}
