import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()usuarioM: string;

  usuario: Usuario = {email:"", passwd:"", token:""};

    recordar = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    if (localStorage.getItem('email')){
      this.usuario.email=localStorage.getItem('email');
      this.recordar= true;
    }

  }


  login ($event){

    this.auth.authUsuario(this.usuario.email, this.usuario, this.recordar).subscribe(
      u => {
        this.usuario = u;
      },
      e => console.log(e)
    );
  }

}
