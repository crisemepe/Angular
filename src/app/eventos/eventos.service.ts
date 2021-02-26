import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import {map, filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  eventosURL='assets/eventos.json';

  getEventos(): Observable<Evento[]>{
    return this.http.get<{eventos: Evento[]}>(this.eventosURL).pipe(
      map(response => response.eventos)
    );
  }
    getEvento(id:string): Observable<Evento>{
    return this.http.get<{eventos: Evento[]}>(this.eventosURL).pipe(
      map(response => response.eventos.filter(event => event.id === id)[0])
    );
  }

}
