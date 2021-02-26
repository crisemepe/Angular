import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-detalle',
  templateUrl: './eventos-detalle.component.html',
  styleUrls: ['./eventos-detalle.component.css']
})
export class EventosDetalleComponent implements OnInit {

  evento: Evento;

  constructor(private activatedRoute: ActivatedRoute,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(event => {
        this.eventosService.getEvento(event.id).subscribe(evento=> this.evento = evento);
    });
  }

}
