import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  // Creamos la instancia de este emisor de eventos y debo decorarla con el @output y este va
  // de hijo a padre, EventEmitter emite datos de este hijo al padre. 
  // onNewPersonaje va a ser visible en el padre que es main
  @Output()
  public onNewPersonaje: EventEmitter<Character> = new EventEmitter();

  // Defino e inicializo
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{

    // Si no tiene nombre retorna
    if (this.character.name.length === 0) return;

    console.log("add-personaje que va a emitir", this.character)

    // Si ya paso validacion y tiene nombre lo emitimos en onNewPersonaje y emitimos el this.character
    this.onNewPersonaje.emit(this.character);

    // Limpia pantalla
    //this.character.name ='';
    //this.character.power=0;

  }

}
