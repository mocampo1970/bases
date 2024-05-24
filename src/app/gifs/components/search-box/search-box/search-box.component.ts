import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  // Este viewChild pide 2 argumentos si me paro encima de la palabra un selector: string 
  // ese selector es el nombre del elemento html que quiero tomar 
  // el tagInput con esto ->!: le estoy diciendo que siempre va a tener una referencia.
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  // Inyectamos el service
  constructor(private gifsService: GifsService){

  }

  // este metodo se debe llamar de algun lado se llama cuando se haga click alla en el html obviamente
  // se llama.
  searchTag(newtag1: string){

    const newtag = this.tagInput.nativeElement.value;

    console.log("entro a searchtag")
    console.log({newtag});
  }

}
