import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { SearchBoxComponent } from '../components/search-box/search-box/search-box.component';


// Aqui exporto app-home-page que asi se llama el selector pero se exporta con el nombre 
// del componente HomePageComponent
// igual con el search box component ya lo puedo utilizar en cualquier parte del modulo. Eso
// si, debe estar incluido en el export.
// NOTA: como yo cree el SearchBoxComponent el se importa automaticamente en appmodule pero lo vamos
//       a utilizar es en el gifs.module entonces se debe eliminar de appmodule porque sale error.

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent
  ]
})
export class GifsModule { }
