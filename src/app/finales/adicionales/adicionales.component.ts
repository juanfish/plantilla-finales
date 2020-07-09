import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.component.html',
  styleUrls: ['./adicionales.component.scss']
})
export class AdicionalesComponent implements OnInit {

  dtColumnas: DataTables.ColumnSettings[] = [
    { title: 'Num Asunto',    data: 'Nuasunto' },
    { title: 'Sistema',     data: 'Sistema' },
    { title: 'Descripción', data: 'Descmax' },
    { title: 'Fecha', data: 'Fecha' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
