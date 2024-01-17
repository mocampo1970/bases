import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // Aqui como todo esto lo pasamos para el servicio aqui lo tenemos que inyectar pero lo vamos a 
  // colocar private por temas de que asi se debe hacer
  constructor(private dbzService: DbzService){

  }

  // Cuando se coloca la clase privada aqui la puedo acceder lo vamos a hacer con operador spread
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  
  // NOTA: Character es un arreglo si se le omite el [] queda como un dato y muestra error
  //       Otra cosa es que dentro de la asignacion de la ste interfaz debe ser con : NO con =
  //       porque saca error. Estos superheroes se van a pasar a listpersonajes alla se reciben
  //       con @Input


  // Todo esto va para el servicio dbz.service

  /*public characters: Character[] = [{
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
  },{
    name : 'Horacio Ocampo',
    power : 100000000
  },{
    name : 'Margarita Gonzalez',
    power : 100000000
  }

  ];
  */


  // Metodo que adiciona un personaje asi esaba antes
  /*onNewPersonaje(character: Character): void{
    console.log("mainpage")
    console.log("mainpage character : ", character)
    //this.characters.unshift(character);   // Lo pone al ppio del arreglo
    this.characters.push(character);        // Lo pone al final del arreglo
  }*/

  // asi queda el nuevo personaje
  onNewPersonaje(character: Character){

  }

  // Metodo que elimina personaje este metodo esta en el list pero aqui se refresca
  // si tuvieramos un servicio aqui se llamaria y se refresca la ventana
  /*
  onDeletePersonaje(index: number){
    this.characters.splice(index, 1);
  }*/

    // Asi queda 
    onDeletePersonaje(id: number): void{
      this.dbzService.onDeletePersonaje(id);
    }

  


}
