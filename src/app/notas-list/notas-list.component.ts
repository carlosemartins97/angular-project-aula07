import { Component, OnInit } from '@angular/core';
import { Nota } from './nota';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})
export class NotasListComponent implements OnInit {
  listaNotas: Nota[] = [
    { name: 'Carlos', nota: 100 },
    { name: 'Joaquim', nota: 55 },
    { name: 'Joana', nota: 72 },
    { name: 'Cleo', nota: 90 }
  ];

  constructor() {}

  ngOnInit() {}
}
