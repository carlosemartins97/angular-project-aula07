import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Nota } from './nota';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})
export class NotasListComponent implements OnInit {
  listaNotas: Nota[] = [];
  isEditMode = false;

  nota: number;

  constructor() {}

  ngOnInit() {
    this.listaNotas = this.getData();
  }

  getData(): Nota[] {
    const savedValues = localStorage.getItem('notas');
    if (savedValues) {
      return JSON.parse(savedValues);
    } else {
      this.listaNotas.push(
        { name: 'Carlos', nota: 100 },
        { name: 'Joaquim', nota: 55 },
        { name: 'Joana', nota: 72 },
        { name: 'Cleo', nota: 90 }
      );
      localStorage.setItem('notas', JSON.stringify(this.listaNotas));
      return this.listaNotas;
    }
  }

  onChange(v: string, index: number) {
    const data = this.getData();
    const value = Number(v);
    for (let i = 0; i < data.length; i++) {
      if (index === i) {
        data[i].nota = value;
        localStorage.setItem('notas', JSON.stringify(data));
      }
    }
  }
}
