import { Component, OnInit } from '@angular/core';
import { ClienteComponentService } from '../../cliente.service';
import { Cliente } from '../../cliente.model';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss']
})
export class DireccionComponent implements OnInit {

  cliente: Cliente ;
  constructor(private clienteSrv: ClienteComponentService) {
    
  }
  
  ngOnInit(): void {
    console.log('componente direccion creado');
    this.cliente = this.clienteSrv.clienteJSON[0];

  }

}
