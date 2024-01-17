import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

console.log(uuid);

// Inyectable significa que es un servicio y el providedId nuestro servicio sirve para 
// toda la aplicacion, siempre y cuando lo hagamos como inyeccion de dependencias.
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

 // NOTA: Character es un arreglo si se le omite el [] queda como un dato y muestra error
  //       Otra cosa es que dentro de la asignacion de la ste interfaz debe ser con : NO con =
  //       porque saca error. Estos superheroes se van a pasar a listpersonajes alla se reciben
  //       con @Input
  public characters: Character[] = [{
    id: uuid(),
    name: 'Matias',
    power : 100000000
  },
  {
    id: uuid(),
    name : 'Camila',
    power : 100000000
  },{
    id: uuid(),
    name : 'Jami',
    power : 100000000
  },{
    id: uuid(),
    name : 'Mauricio Ocampo',
    power : 100000000
  },{
    id: uuid(),
    name : 'Horacio Ocampo',
    power : 100000000
  },{
    id: uuid(),
    name : 'Margarita Gonzalez',
    power : 100000000
  }
  ];

  // Metodo que adiciona un personaje
  onNewPersonaje(character: Character): void{
    console.log("mainpage")
    console.log("mainpage character : ", character)

    // Es una forma de definirla
    /*const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }*/

    // O tambien se puede definir con el operador spread Spread Operator en typescript es con...
    // esto significa esparce todas las propiedades en el nuevo objeto que estoy creando
    const newCharacter: Character = { id: uuid(), ...character}


    //this.characters.unshift(character);   // Lo pone al ppio del arreglo
    this.characters.push(character);        // Lo pone al final del arreglo
  }

  // Metodo que elimina personaje este metodo esta en el list pero aqui se refresca
  // si tuvieramos un servicio aqui se llamaria y se refresca la ventana
  onDeletePersonaje(index: number){
    this.characters.splice(index, 1);
  }


}
