import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disciplina } from '../disciplina';
import { DisciplinasService } from '../disciplinas.service';

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

@Component({
  selector: 'app-quadro-disciplinas',
  templateUrl: './quadro-disciplinas.component.html',
  styleUrls: ['./quadro-disciplinas.component.css']
})
export class QuadroDisciplinasComponent implements OnInit {
  listaDisciplinas: Disciplina[] = [];
  actualComponent: any = '';
  name: string = '';
  @Output() editOn = new EventEmitter<number>();

  constructor(
    private disciplinasService: DisciplinasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listaDisciplinas = this.disciplinasService.getDisciplinas();
    this.disciplinasService.disList.subscribe((list: Disciplina[]) => {
      this.listaDisciplinas = list;
    });
    if (typeof this.route.snapshot.component === 'function') {
      this.name = this.route.snapshot.component.name;
    }
  }

  onRemove(index: number) {
    this.disciplinasService.removeDisciplina(index);
  }

  onEdit(disciplina: Disciplina, index: number) {
    this.editOn.emit(index);
  }
}
