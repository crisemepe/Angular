import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from '../evento';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {


  evento: Evento;
  formNuevo: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {

   }

  //  crearFormulario(){
  // this.formNuevo = this.formBuilder.group({
  //   id: [''],
  //   titulo:[''],
  //   fecha: [''],
  //   sitio: [''],
  //   descripcion:[''],
  //   nivel:[''],
  //   plaza:[''],
  //   precio:[''],
  //   tipo:['']
  // });
  //  }

  ngOnInit(): void {
  // this.crearFormulario();
    this.formNuevo = new FormGroup(
      {
        id: new FormControl('00', [Validators.required]),
        titulo: new FormControl('Titulo Evento', [Validators.maxLength(30)]),
        fecha: new FormControl(),
        sitio: new FormControl(),
        descripcion: new FormControl('', [Validators.minLength(10)]),
        nivel: new FormControl('Fácil'),
        plazas: new FormControl(),
        precio: new FormControl(0),
        tipo: new FormControl('', [Validators.required])

    })
  }



}
