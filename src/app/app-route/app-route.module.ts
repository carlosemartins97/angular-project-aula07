import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DisciplinasListComponent } from '../disciplinas-list/disciplinas-list.component';
import { FormsModule } from '@angular/forms';

const appRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'disciplinas', component: DisciplinasListComponent }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouteModule {}
