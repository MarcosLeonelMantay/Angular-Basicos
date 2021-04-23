import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje;

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */
  /* 
  agregar = (evento: any) => {
    evento.preventDefault();
    console.log( "HEY!!" );
  } 
  */

  constructor( private dbzService: DbzService ) {

  }

 agregar = () => {
   if ( this.nuevo.nombre.trim().length === 0 ) {
     return;
   }
   /* this.onNuevoPersonaje.emit(this.nuevo); */
   this.dbzService.agregarPersonaje( this.nuevo )
   this.nuevo = {
     nombre: "",
     poder:0
   }

 };
  /* 
 cambiarNombre = ( evento: any ) => this.nuevo.nombre = evento.target.value; 
 cambiarPoder = ( evento: any ) => this.nuevo.poder = evento.target.value; 
 */

}
