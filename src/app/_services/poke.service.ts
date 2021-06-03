import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get(this.baseUrl + 'pokemon?limit=10');
  }

  getPokemon(name: string){
    return this.http.get(this.baseUrl + `pokemon/${name}`);
  }
}
