import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteComponentService } from './cliente.service';
import { Cliente } from './cliente.model';

// import { InstruccionComponentService } from './adicionales/instruccion/instruccion.service';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss']
})
export class FinalesComponent implements OnInit {
  valorRiesgo: number = -1;
  txtconyugue: string;
  varcbPais: number = -1;

  status = false;

  txtBajo: string;
  txtMedio: string;
  txtAlto: string;

  @ViewChild('divComboRiesgo') varcbRiesgo: ElementRef;
  @ViewChild('contenedorRiesgo') varcntRiesgo: ElementRef;


  usuario = {nombre : 'juan', apellido : 'figuera'}
  resultado : any;

  // cliente: Cliente = {id : 0, Pais : 0, Riesgo : 0 , Direccion : '', Instruccion : '' } ;
  cliente: Cliente;

  dtColumnas: DataTables.ColumnSettings[] = [
    { title: 'N°',    data: 'id' },
    { title: 'Direccion',     data: 'Direccion' },
    { title: 'Instruccion', data: 'Instruccion' },
    { title: 'Riesgo', data: 'Riesgo' },
    { title: 'Pais', data: 'Pais' }
  ];


  constructor(private renderPresentacion: Renderer2,
    private http: HttpClient,
    private clienteSrv: ClienteComponentService,
  ) {
  }

  ngOnInit(): void {
    


    // 1.- llamada simple por susbcribe INI
    // let obs = this.http.get<Cliente[]>('http://localhost:8000/Clientes')
    // obs.subscribe(resultado => {

    //   console.log('%c El valor de resultado es', 'color: blue;') ;
    //   console.log( {resultado}) ;
    //   this.resultado = resultado;
      
    //   this.clienteSrv.setClientes(resultado.slice()); // meto todo el arrego en el servicio, pero igual los objetos no son del tipo 'Cliente'

    //   this.cliente = this.clienteSrv.clienteJSON[0];
    //   this.status = true;     // con esto manipulo crear el componente de adicionales cuando ya tenga la data cargada, si no me da undefined por la asincronia
    // })
    // FIN

    // 2.-  Declaracion de una promesa que ejecute el subscribe de siempre
      let p = new Promise((resolve, reject) => {
        let obs = this.http.get<Cliente[]>('http://localhost:8000/Clientes')
        obs.subscribe(resultado => {
          this.clienteSrv.setClientes(resultado.slice() ); // meto todo el arrego en el servicio, pero igual los objetos no son del tipo 'Cliente'          
          console.log('termine de correr el subscribe dentro de la promesa');
          this.cliente = this.clienteSrv.clienteJSON[0];
          this.status = true;     // con esto manipulo crear el componente de adicionales cuando ya tenga la data cargada, si no me da undefined por la asincronia
          resolve(this.status);  // necesito el resolve como respuesta de que todo esta bien en la promesa
        })
  
      })
      
      // Aqui ejecuto la promesa con la variable 'p'
      p.then(() => console.log('cargado todo'))  // me meto por aca gracias al resolve
      .catch(()=>{
        console.log('Se daño todo');
      });
    // FIN DEL 2   
      
  }

  dameValor() {
    // hago nada
  }



  onChangeCBPais() {
    if (this.cliente.Pais === 1) {
      this.renderPresentacion.setStyle(this.varcbRiesgo.nativeElement, 'visibility', 'hidden');
      this.renderPresentacion.setStyle(this.varcntRiesgo.nativeElement, 'visibility', 'hidden');

    } else {
      this.renderPresentacion.setStyle(this.varcbRiesgo.nativeElement, 'visibility', 'visible');
      this.renderPresentacion.setStyle(this.varcntRiesgo.nativeElement, 'visibility', 'visible');

    }

  }


}
