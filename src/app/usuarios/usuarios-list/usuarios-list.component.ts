import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})

export class UsuariosListComponent implements OnInit {

  usuarios: Usuario[] = [
  ]

  busqueda: string = '';

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(
      usuarios =>{
        this.usuarios = usuarios,
        console.log(this.usuarios);
      })
  }

}



