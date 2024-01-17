import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listpersonajes',
  templateUrl: './listpersonajes.component.html',
  styleUrls: ['./listpersonajes.component.css']
})
export class ListpersonajesComponent {

  // @Input permite recibir datos del componente padre en este caso el main aqui al hijo
  @Input()

  public characterList: Character[] = [{
    name: 'Mao',
    power: 1000000000
  }]

  //================================================================================================
  // Creamos la instancia de este emisor de eventos y debo decorarla con el @output y este va
  // de hijo listcomponent a padre main, EventEmitter emite datos de este hijo al padre. 
  // onDelete va a ser visible en el padre que es main
  //================================================================================================
  @Output()
  // public onDelete = new EventEmitter<number>(); <- Esta forma tambien es valida o la de abajo
  public onDelete: EventEmitter<number> = new EventEmitter();

  // Aqui en la lista vamos a eliminar un registro X presionando el boton eliminar, este eliminar como
  // son 2 componentes diferentes lo hacemos por @output y por EventEmitter
  onDeletePersonaje(index: number): void{
    // TODO: emitir el id del personaje
    console.log("index", index)
    this.onDelete.emit(index);

    // mensaje
    // Tema de sweetalert2
    Swal.fire({}).then((result) => {})


    Swal.fire({
      title: 'Esta seguro que desea eliminar?',
      text: "El registro del producto: " + index,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      // Si confirman que eliminan 
      if (result.isConfirmed) {
        // Vamos a ingresar aqui el codigo de eliminar
        /*this.productoService.delete(producto.id).subscribe(
          res => this.productoService.getAll().subscribe(
          response => this.productos = response  
          )
        )
        Swal.fire(
          'Eliminado!',
          'Tu registro fue eliminado.',
          'success'
        )*/

        this.onDelete.emit(index);

      }
    })    

  }

}
