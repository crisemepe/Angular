import { Component, Input, OnInit } from '@angular/core';
import {Evento} from '../evento';

@Component({
  selector: 'app-eventos-item',
  templateUrl: './eventos-item.component.html',
  styleUrls: ['./eventos-item.component.css']
})
export class EventosItemComponent implements OnInit {

  @Input() evento: Evento;

  constructor() { }

  ngOnInit(): void {
  }

}
