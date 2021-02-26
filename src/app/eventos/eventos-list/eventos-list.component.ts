import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  @Input() evento: Evento;

  eventos: Evento[] = [
  ]

  criterio: string = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe(
      eventos =>{
        this.eventos = eventos,
        console.log(this.eventos);
      })
  }

}
