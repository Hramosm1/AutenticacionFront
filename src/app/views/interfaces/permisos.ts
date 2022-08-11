export interface Permiso {
  id: number;
  ver: boolean;
  crear: boolean;
  editar: boolean;
  eliminar: boolean;
  Roles: Roles;
  Modulos: Modulos;
  activo: boolean;
}
export interface PermisoEspecial {
  id: number, nombre: string, aplicacion: string
}

export interface Roles {
  id: number;
  nombre: string;
}

export interface Aplicaciones {
  id: number;
  nombre: string;
}

export interface Modulos {
  id: number;
  nombre: string;
  Aplicaciones: Aplicaciones;
}

