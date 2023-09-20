import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Matias','Camila','Jami', 'Horacio', 'Juan fer', 'Margarita']
  //public deletedHero1: String = [];
  public deletedHero?: String;

  // Remueve el heroe
  removeLastHero(): void {
    //========================================================================================
    // NOTA: 
    //========================================================================================    
    // Este deletedHero1 muestra error porque el tipo string no se puede asignar a un undefined
    // para eso se utiliza el deletedHero?
    //this.deletedHero1 = this.heroNames.pop();
    this.deletedHero  = this.heroNames.pop();
  }

}
