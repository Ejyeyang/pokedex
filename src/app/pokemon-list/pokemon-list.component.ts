import { Component, OnInit } from '@angular/core';
import { PokeService } from '../_services/poke.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent implements OnInit {
  pokemons: any = [];
  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((res:any) => {
      console.log(res);
      res.results.forEach(pokemon => {
        this.pokeService.getPokemon(pokemon.name).subscribe((resp: any) => {
          console.log(resp);
        });
      });
    });
  }

}
