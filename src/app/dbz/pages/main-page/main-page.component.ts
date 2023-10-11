import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // NOTA: Character es un arreglo si se le omite el [] queda como un dato y muestra error
  //       Otra cosa es que dentro de la asignacion de la ste interfaz debe ser con : NO con =
  //       porque saca error. Estos superheroes se van a pasar a listpersonajes alla se reciben
  //       con @Input
  public characters: Character[] = [{
    name: 'Matias',
    power : 100000000
  },
  {
    name : 'Camila',
    power : 100000000
  },{
    name : 'Jami',
    power : 100000000
  },{
    name : 'Mauricio Ocampo',
    power : 100000000
  }

];

}
