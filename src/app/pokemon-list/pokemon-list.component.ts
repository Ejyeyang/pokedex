import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeService } from '../_services/poke.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent implements OnInit {
  pokemons: any = [];
  pokemonsList: any = [];

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((res:any) => {
      res.results.forEach(poke => {
        this.pokeService.getPokemon(poke.name).subscribe((resp: any) => {
          this.pokemons.push(resp);
        });
        this.pokemonsList = this.pokemons;
      });
    });
  }
}
