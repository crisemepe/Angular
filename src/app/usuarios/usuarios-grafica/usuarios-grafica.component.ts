import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios-grafica',
  templateUrl: './usuarios-grafica.component.html',
  styleUrls: ['./usuarios-grafica.component.css']
})

export class UsuariosGraficaComponent implements OnInit {

  usuarios: Usuario[] = [
  ]

  constructor(private usuariosService: UsuariosService) { }

  public chartType: string = 'pie';

  public chartDatasets: Array<any>;

  ngOnInit(): void {
    this.chartDatasets = [
      { data: [150, 100, 200, 40, 10], label: 'My First dataset' }
    ];
  }

  public chartLabels: Array<any> = ['18-21', '22-25', '26-30', '31-35', '+35'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [ '#F7464A','#46BFBD', '#00f396', '#fdd25c','#F39200'],
      hoverBackgroundColor: ['#f74649f6','#46bfbdf5', '#00f396f1', '#fdd25cec','#f39200ec'],
      borderWidth: 2,
    }
  ];


  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
