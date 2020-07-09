import { Component, OnInit } from '@angular/core';
import { DireccionComponentService } from './direccion.services';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss']
})
export class DireccionComponent implements OnInit {
  Direcciones : DireccionComponentService;
 
 
  constructor( private direccionesSrv : DireccionComponentService) { 

    
  }
  
  
  ngOnInit(): void {
    this.Direcciones = this.direccionesSrv;
    
  }

}
