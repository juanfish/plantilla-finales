import { Component, OnInit } from '@angular/core';
import { ClienteComponentService } from '../../cliente.service';

@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.scss']
})
export class RiesgoComponent implements OnInit {
  txtRiesgo : string;
  
  cliente : Object = {};
  dtColumnas: DataTables.ColumnSettings[] = [
    { title: 'N°',    data: 'id' },
    { title: 'Direccion',     data: 'Direccion' },
    { title: 'Instruccion', data: 'Instruccion' },
    { title: 'Riesgo', data: 'Riesgo' },
    { title: 'Pais', data: 'Pais' }
  ];


  constructor( private clienteSrv : ClienteComponentService) { 
     
  }



  ngOnInit(): void {
  }

}
