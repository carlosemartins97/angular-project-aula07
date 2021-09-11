import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit() {}
}
