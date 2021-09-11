import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiasDaSemana } from './dias-da-semana.enum';
import { Disciplina } from './disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  listaDisciplinas: Disciplina[] = [];
  disList = new Subject<Disciplina[]>();

  constructor() {}

  getDisciplinas() {
    const savedValues = localStorage.getItem('disciplinas');
    if (savedValues) {
      return (this.listaDisciplinas = JSON.parse(savedValues));
    } else {
      return (this.listaDisciplinas = []);
    }
  }

  getDisciplinaById(index: number) {
    return this.listaDisciplinas[index];
  }

  addNewDisciplina(disciplina: Disciplina) {
    this.listaDisciplinas.push(disciplina);
    localStorage.setItem('disciplinas', JSON.stringify(this.listaDisciplinas));
  }

  removeDisciplina(index: number) {
    this.listaDisciplinas.splice(index, 1);
    localStorage.setItem('disciplinas', JSON.stringify(this.listaDisciplinas));
  }

  editDisciplina(disciplina: Disciplina) {
    console.log(disciplina);
    this.listaDisciplinas.forEach(disc => {
      if (disciplina.nome === disc.nome) {
        disc.horario = disciplina.horario;
        disc.dia = disciplina.dia;
        localStorage.setItem(
          'disciplinas',
          JSON.stringify(this.listaDisciplinas)
        );
        return;
      }
    });
  }
}
