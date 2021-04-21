import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    heroes: string[] = ["Spiderman", "Superman", "Hulk", "Thor", "Batman"];
    heroeBorrado: string = "";
    borrarHeroe = () => {
       /* 
       let nuevosHeroes = this.heroes.filter( heroe => heroe !== "Superman" ); 
       this.heroes = nuevosHeroes; 
       */
      this.heroeBorrado = this.heroes.shift() || "";
    }
}
