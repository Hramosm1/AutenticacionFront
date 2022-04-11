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
    }
];

export const defaultNavigation: FuseNavigationItem[] = navigation;
export const compactNavigation: FuseNavigationItem[] = navigation;
export const futuristicNavigation: FuseNavigationItem[] = navigation;
export const horizontalNavigation: FuseNavigationItem[] = navigation;