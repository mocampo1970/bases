import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Asi viene por defecto 
  //title = 'bases';
  // lo vamos a cambiar por este ya que el profe le gusta definirlo asi
  public title: string = "Titulo App bases " 
}
