import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from './evento';

@Pipe({
  name: 'filtroEventos'
})
export class FiltroEventosPipe implements PipeTransform {

  transform(eventos: Evento[], criterio: string): Evento[] {
    criterio = criterio ? criterio.toLocaleUpperCase() : null;
    eventos = criterio ? eventos.filter(e => e.tipo.toLocaleUpperCase().includes(criterio)) : eventos;
    return eventos;
  }

}
