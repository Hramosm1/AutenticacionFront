import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { MaterialLayoutModule } from 'app/layout/layouts/horizontal/material/material.module';
import { SharedModule } from 'app/shared/shared.module';

const layoutModules = [
    // Horizontal navigation
    MaterialLayoutModule,
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        ...layoutModules
    ],
    exports: [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule {
}
