import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  //pokemonList: any = [];
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get(this.baseUrl + 'pokemon?limit=10');
  }

  getPokemon(name: string){
    return this.http.get(this.baseUrl + `pokemon/${name}`);
  }

  // getPokemonList(){
  //   this.getPokemons().subscribe((res: any) => {
  //     res.results.forEach(pokemon => {
  //       this.getPokemon(pokemon.name).subscribe((resp: any) => {
  //         this.pokemonList.push(resp);
  //       });
  //     });
  //   })
  // }
}
