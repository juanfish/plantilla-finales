import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.component.html',
  styleUrls: ['./adicionales.component.scss']
})
export class AdicionalesComponent implements OnInit {
  tabSeleccionada :number = 1;
  
  // dtColumnas: DataTables.ColumnSettings[] = [
  //   { title: 'Num Asunto',    data: 'Nuasunto' },
  //   { title: 'Sistema',     data: 'Sistema' },
  //   { title: 'Descripción', data: 'Descmax' },
  //   { title: 'Fecha', data: 'Fecha' }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickSegment(id : number){
   this.tabSeleccionada = id;
  }
}
