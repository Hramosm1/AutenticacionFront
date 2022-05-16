import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'permisos' },

    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'permisos' },

    { path: 'auth', loadChildren: () => import('app/modules/auth/auth.module').then(m => m.AuthModule) },
    // Admin routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'permisos', loadChildren: () => import('app/views/permisos/permisos.module').then(m => m.PermisosModule) },
            { path: 'aplicaciones', loadChildren: () => import('app/views/aplicaciones/aplicaciones.module').then(m => m.AplicacionesModule) },
            { path: 'modulos', loadChildren: () => import('app/views/modulos/modulos.module').then(m => m.ModulosModule) },
            { path: 'roles', loadChildren: () => import('app/views/roles/roles.module').then(m => m.RolesModule) },
            { path: 'permisosEspeciales', loadChildren: () => import('app/views/permisos-especiales/permisos-especiales.module').then(m => m.PermisosEspecialesModule) }
        ]
    }
];
