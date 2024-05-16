import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(){

  }

  // este metodo se debe llamar de algun lado se llama cuando se haga click alla en el html obviamente
  // se llama.
  searchTag( newTag: string){
    console.log({newTag});
  }

}
