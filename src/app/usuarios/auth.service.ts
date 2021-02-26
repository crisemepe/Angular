import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario;
  email: string;
  constructor(private http: HttpClient, private router: Router, private usuarioService: UsuariosService) { }

  url = 'assets/usuarios.json';

  authUsuario(usuarioMail: string, usuario: Usuario, recordar): Observable<Usuario>{
    return this.http.get<Usuario>(this.url)

    .pipe(map(u => {
      console.log(usuarioMail);

      this.usuarioService.getUsuario(usuarioMail).subscribe(
        (usu) => this.usuario = usu
      );
      this.usuario = usuario;
      console.log(this.usuario);
      this.email = usuario.email;

      localStorage.setItem('token',usuario.token);
      this.email=usuarioMail;
      if (recordar) localStorage.setItem('email', usuarioMail);
      this.usuario=u;
        return u;}));
  }

  getEmail(): string{
    return this.email;
  }


  isAuth(): boolean{
    if (localStorage.getItem('token').length>2) {
      console.log(localStorage.getItem('token'));
      return true;
    } else return false;
  }

  logOut(): void{
   localStorage.removeItem('token');
   this.email=null;
   this.router.navigate(["/home"]);
  }
}
