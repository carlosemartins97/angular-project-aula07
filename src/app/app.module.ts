import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouteModule } from './app-route/app-route.module';
import { CommonModule } from '@angular/common';
import { QuadroDisciplinasComponent } from './quadro-disciplinas/quadro-disciplinas.component';
import { DisciplinasListComponent } from './disciplinas-list/disciplinas-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouteModule, CommonModule],
  declarations: [AppComponent, NavbarComponent, HomeComponent,
    DisciplinasListComponent,
    QuadroDisciplinasComponent,],
  bootstrap: [AppComponent]
})
export class AppModule {}
