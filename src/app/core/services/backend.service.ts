import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

export type BaseType =
	'aplicaciones'
	| 'usuarios'
	| 'roles'
	| 'modulos'
	| 'permisos'
	| 'permisosEspeciales'
	| 'usuarioPorRol'
	| 'importaciones';

interface PostResult {
	recordset: any[];
	recordsets: any[];
	output: any;
	rowsAffected: number[];
}

@Injectable({
	providedIn: 'root'
})
export class BackendService {
	base = environment.serverUrl;

	constructor(private http: HttpClient) {
	}

	getAll<T>(uri: BaseType, query?: { [param: string]: string | number | boolean }): Observable<T[]> {
		const params = new HttpParams({fromObject: query}) ? true : {};
		return this.http.get<T[]>(this.base + uri, {params});
	}

	getById<T, D>(uri: BaseType, id: D): Observable<T> {
		return this.http.get<T>(`${this.base}${uri}/${id}`);
	}

	create<BodyType>(uri: BaseType, body: BodyType): Observable<PostResult> {
		return this.http.post<PostResult>(this.base + uri, body);
	}

	editById<IdType, BodyType>(
		uri: BaseType,
		id: IdType,
		body: BodyType
	): Observable<PostResult> {
		return this.http.put<PostResult>(`${this.base}${uri}/${id}`, body);
	}

	delete<IdType>(uri: BaseType, id: IdType): Observable<PostResult> {
		return this.http.delete<PostResult>(`${this.base}${uri}/${id}`);
	}

	actualizarPermisos(body: object): Observable<any> {
		return this.http.put(this.base + 'permisos', body);
	}
}

