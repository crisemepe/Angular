import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from './usuario';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(usuarios: Usuario[], busqueda: string): Usuario[] {
    busqueda = busqueda ? busqueda.toLocaleUpperCase(): null;
    usuarios = busqueda ? usuarios.filter(u => u.genero.toLocaleUpperCase().includes(busqueda) || u.nombre.toLocaleUpperCase().includes(busqueda) || u.ciudad.toLocaleUpperCase().includes(busqueda)) : usuarios;
    return usuarios;
  }

}


