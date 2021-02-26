import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  private email: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.email = this.authService.getEmail();
    this.usuariosService.getUsuario(this.email).subscribe(
      usu => this.usuario = usu
    );
  }
}
