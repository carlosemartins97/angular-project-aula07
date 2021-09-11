import { DiasDaSemana } from './dias-da-semana.enum';

export class Disciplina {
  nome: string;
  dia: DiasDaSemana;
  horario: string;

  constructor(nome: string, dia: DiasDaSemana, horario: string) {
    this.dia = dia;
    this.nome = nome;
    this.horario = horario;
  }
}
