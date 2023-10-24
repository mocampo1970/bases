import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  // Defino e inicializo
  public character: Character = {
    name: '',
    power: 0
  }

}
