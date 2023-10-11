import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-listpersonajes',
  templateUrl: './listpersonajes.component.html',
  styleUrls: ['./listpersonajes.component.css']
})
export class ListpersonajesComponent {

  // @Input permite recibir datos del componente padre en este caso el main
  @Input()

  public characterList: Character[] = [{
    name: 'Mao',
    power: 1000000000
  }]

  // Hola esto es un comentario..

}
