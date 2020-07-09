import { Component, OnInit } from '@angular/core';
import { InstruccionComponentService } from './instruccion.service';

@Component({
  selector: 'app-instruccion',
  templateUrl: './instruccion.component.html',
  styleUrls: ['./instruccion.component.scss']
})
export class InstruccionComponent implements OnInit {
  instrucciones : InstruccionComponentService

  constructor(private instruccionSrv : InstruccionComponentService) { }

  ngOnInit(): void {
    this.instrucciones = this.instruccionSrv;

  }


  carga(){
  }

}
