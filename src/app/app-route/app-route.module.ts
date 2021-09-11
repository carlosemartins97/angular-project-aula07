import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DisciplinasListComponent } from '../disciplinas-list/disciplinas-list.component';
import { QuadroDisciplinasComponent } from '../quadro-disciplinas/quadro-disciplinas.component';
import { FormsModule } from '@angular/forms';
import { NotasListComponent } from '../notas-list/notas-list.component';

const appRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'disciplinas', component: DisciplinasListComponent },
  { path: 'notas', component: NotasListComponent }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    HomeComponent,
    DisciplinasListComponent,
    QuadroDisciplinasComponent,
    NotasListComponent
  ],
  exports: [RouterModule]
})
export class AppRouteModule {}
