import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../evento';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css']
})
export class EventoEditComponent implements OnInit {

  evento: Evento;

  constructor(private activatedRoute: ActivatedRoute,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.evento = this.activatedRoute.snapshot.data['evento'];
  }



}
