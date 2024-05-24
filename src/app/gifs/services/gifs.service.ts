import { Injectable } from '@angular/core';

// Servicio disponible en toda la app, sino se le coloca el root se debe colocar en el module 
// realizando el providers[]
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Creo una propiedad que almacene todos las busquedas. en un arreglo de tipo string
  private _tagsHistory: string[] = [];

  constructor() { }

  // Getter
  get tagsHistory (){
    return this._tagsHistory;
  }

  // Metodo que va a buscar 
  public searchTag(tag: string): void{
    // Añadirlo al inicio
    this._tagsHistory.unshift(tag);
  }

}
