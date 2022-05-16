import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

export type BaseType = 'aplicaciones' | 'usuarios' | 'roles' | 'modulos' | 'permisos' | 'permisosEspeciales';
interface postResult {
  recordset: any[]
  recordsets: any[]
  output: any
  rowsAffected: number[]
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  base = environment.serverUrl;
  constructor(private http: HttpClient) { }

  getAll<T>(uri: BaseType): Observable<T[]> {
    return this.http.get<T[]>(this.base + uri);
  }
  getById<T, D>(uri: BaseType, id: D): Observable<T> {
    console.info(`${this.base}${uri}/${id}`);
    return this.http.get<T>(`${this.base}${uri}/${id}`);
  }
  create<BodyType>(uri: BaseType, body: BodyType): Observable<postResult> {
    return this.http.post<postResult>(this.base + uri, body);
  }
  editById<IdType, BodyType>(
    uri: BaseType,
    id: IdType,
    body: BodyType
  ): Observable<postResult> {
    return this.http.put<postResult>(`${this.base}${uri}/${id}`, body);
  }
  delete<IdType>(uri: BaseType, id: IdType): Observable<postResult> {
    return this.http.delete<postResult>(`${this.base}${uri}/${id}`);
  }
}
