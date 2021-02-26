import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
