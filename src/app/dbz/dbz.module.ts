import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes propios 
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListpersonajesComponent } from './components/listpersonajes/listpersonajes.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListpersonajesComponent,
    AddPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
