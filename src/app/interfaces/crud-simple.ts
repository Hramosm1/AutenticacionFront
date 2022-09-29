export interface Column {
  name: string;
  key: string;
}
export interface Input extends Column {
  default?: number | string;
}
export  interface UsuarioConRol {
	id: string;
	nombre: string;
	usuario: string;
	rol: string;
}
