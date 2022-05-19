/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

const navigation: FuseNavigationItem[] = [
    {
        id: 'Aplicaciones',
        title: 'Aplicaciones',
        type: 'basic',
        icon: 'heroicons_outline:puzzle',
        link: '/aplicaciones'
    },
    {
        id: 'Modulos',
        title: 'Modulos',
        type: 'basic',
        icon: 'heroicons_outline:cash',
        link: '/modulos'
    },
    {
        id: 'Permisos',
        title: 'Permisos',
        type: 'basic',
        icon: 'heroicons_outline:shield-check',
        link: '/permisos'
    },
    {
        id: 'Roles',
        title: 'Roles',
        type: 'basic',
        icon: 'heroicons_outline:hand',
        link: '/roles'
    },
    {
        id: 'Permisos especiales',
        title: 'Permisos especiales',
        type: 'basic',
        icon: 'heroicons_outline:sparkles',
        link: '/permisosEspeciales'
    },
    {
        id: 'AsignacionDeRoles',
        title: 'Asignacion de roles',
        type: 'basic',
        icon: 'heroicons_outline:users',
        link: '/personal'
    }
];

export const defaultNavigation: FuseNavigationItem[] = navigation;
export const compactNavigation: FuseNavigationItem[] = navigation;
export const futuristicNavigation: FuseNavigationItem[] = navigation;
export const horizontalNavigation: FuseNavigationItem[] = navigation;