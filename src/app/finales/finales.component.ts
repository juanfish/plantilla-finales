import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { InstruccionComponentService } from './adicionales/instruccion/instruccion.service';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss']
})
export class FinalesComponent implements OnInit {
  valorRiesgo : number = -1;
  txtconyugue : string;

  // @ViewChild('cbPais') varcbPais : ElementRef;
  varcbPais : number;
  @ViewChild('divComboRiesgo') varcbRiesgo : ElementRef;
  @ViewChild('contenedorRiesgo') varcntRiesgo : ElementRef;

  txtBajo: string;
  txtMedio: string;
  txtAlto: string;
  // @ViewChild('txtBajo') vartxtBajo : ElementRef;
  // @ViewChild('seleccionriesgo') varseleccionriesgo : ElementRef;

  
  
  constructor(private renderPresentacion : Renderer2, private instruccionSrv : InstruccionComponentService) {

  }

  ngOnInit(): void {

    let arreglo : string[] = ["SAL001","PEPS11","BAN001","PDV123"];  
  
    this.instruccionSrv.txtInstruccion = arreglo[2];
    
  }
  
  onChangeCBPais( ){
    
    // const x =  this.varcbPais;
    
    if (this.varcbPais == 1) {
      this.renderPresentacion.setStyle(this.varcbRiesgo.nativeElement , 'visibility' , 'hidden');
      this.renderPresentacion.setStyle(this.varcntRiesgo.nativeElement , 'visibility' , 'hidden');
    } else{
      this.renderPresentacion.setStyle(this.varcbRiesgo.nativeElement , 'visibility' , 'visible');
      this.renderPresentacion.setStyle(this.varcntRiesgo.nativeElement , 'visibility' , 'visible');
    }
  
  }

  // onChangeCBRiesgo(){
  //  this.valorRiesgo =  this.varseleccionriesgo.nativeElement.value;

  // }

}
