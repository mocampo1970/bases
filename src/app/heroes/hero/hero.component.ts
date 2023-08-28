import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Mauricio Ocampo Ingeniero de sistemas'
  public age: number = 45;

  // Getter y setter en este caso es un get que se va a mostrar en el html
  get capitalizeName(){
    // Lo convierte a mayuscula
    //return 'Hola mundo'.toUpperCase();
    return this.name.toUpperCase();
  }

  // vamos a hacer un metodo que una name + age puede hacerse de 2 formas como se ve en el 
  // codigo siguiente. 
  //==========================================================================================
  // NOTA: en este caso getHeroDescription es public sino se coloca nada el asume que es public 
  //       pero si se coloca private no puede ser accesada desde el html
  //==========================================================================================  
  getHeroDescription(): string{
    //return this.name + ' ' + this.age;
    return `${this.name} - ${this.age} `
  }

}
