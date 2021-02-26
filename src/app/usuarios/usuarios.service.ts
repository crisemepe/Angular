import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import {map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  usuariosURL = 'assets/usuarios.json';

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<{usuarios: Usuario[]}>(this.usuariosURL).pipe(
      map(response => response.usuarios)
    );
  }

  getUsuario(email:string): Observable<Usuario>{
    return this.http.get<{usuarios: Usuario[]}>(this.usuariosURL).pipe(
      map(response => response.usuarios.filter(usu => usu.email === email)[0])
    );
    }

}
