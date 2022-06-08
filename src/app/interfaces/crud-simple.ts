export interface Column {
  name: string
  key: string
}
export interface Input extends Column {
  default?: number | string
}