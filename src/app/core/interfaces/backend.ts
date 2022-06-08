export interface Aplicaciones {
  id: number
  nombre: string
}
export interface Roles extends Aplicaciones {

}
export interface Modulos {
}
export interface Permisos {
}
export interface PermisosEspeciales {
}
export interface Usuarios {
  correo: string
  id: string
  nombre: string
  usuario: string
}