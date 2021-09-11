import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiasDaSemana } from '../dias-da-semana.enum';
import { Disciplina } from '../disciplina';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas-list',
  templateUrl: './disciplinas-list.component.html',
  styleUrls: ['./disciplinas-list.component.css']
})
export class DisciplinasListComponent implements OnInit {
  diasDaSemana: DiasDaSemana[] = [
    DiasDaSemana.Domingo,
    DiasDaSemana.Segunda,
    DiasDaSemana.Terça,
    DiasDaSemana.Quarta,
    DiasDaSemana.Quinta,
    DiasDaSemana.Sexta,
    DiasDaSemana.Sábado
  ];

  name: string;
  dia: DiasDaSemana;
  horario: string;

  activedDisciplina: Disciplina;
  form: NgForm;

  isEditing = false;

  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.disciplinasService.addNewDisciplina(form.value);
    this.form = form;
  }

  onEditMode(index: number) {
    this.isEditing = true;
    this.activedDisciplina = this.disciplinasService.getDisciplinaById(index);
    this.name = this.activedDisciplina.nome;
    this.dia = this.activedDisciplina.dia;
    this.horario = this.activedDisciplina.horario;
  }

  updateDisciplina(form: NgForm) {
    this.disciplinasService.editDisciplina(form.value);
  }

  changeToAdd() {
    this.isEditing = false;
    this.name = '';
    this.dia = null;
    this.horario = '';
  }
}
