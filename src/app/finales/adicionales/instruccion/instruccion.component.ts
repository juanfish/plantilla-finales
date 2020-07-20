import { Component, OnInit } from '@angular/core';
import { ClienteComponentService } from '../../cliente.service';


@Component({
  selector: 'app-instruccion',
  templateUrl: './instruccion.component.html',
  styleUrls: ['./instruccion.component.scss']
})
export class InstruccionComponent implements OnInit {
  // instrucciones : InstruccionComponentService

  constructor(private clienteSrv : ClienteComponentService) { 
    
  }


  ngOnInit(): void {
  }


  carga(){
  }

}
