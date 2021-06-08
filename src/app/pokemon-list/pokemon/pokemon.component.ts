import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {
@Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {

  }

}
