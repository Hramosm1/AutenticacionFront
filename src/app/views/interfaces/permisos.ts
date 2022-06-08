export interface Permiso {
  id: number;
  ver: boolean;
  crear: boolean;
  editar: boolean;
  eliminar: boolean;
  idModulo: number;
  idRol: number;
  modulo: string;
  aplicacion: string;
  rol: string;
}
export interface PermisoEspecial {
  id: number, nombre: string, aplicacion: string
}