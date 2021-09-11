import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRouteModule } from './app-route/app-route.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouteModule, CommonModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
