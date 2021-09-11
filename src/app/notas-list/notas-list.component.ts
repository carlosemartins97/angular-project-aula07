import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Nota } from './nota';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})
export class NotasListComponent implements OnInit {
  listaNotas: Nota[] = [
    { name: 'Carlos', value: 100 },
    { name: 'Henrique', value: 0 },
    { name: 'Josefa', value: 33 },
    { name: 'Anandiara', value: 98 }
  ];
  isEditingMode = false;

  name: string;

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.name = form.value.name;
    this.isEditingMode = false;
  }

  changeMode() {
    this.isEditingMode = true;
  }
}
