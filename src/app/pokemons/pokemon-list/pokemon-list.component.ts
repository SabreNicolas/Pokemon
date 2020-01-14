import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  nbPokemon = 10;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons(10, 0).subscribe(myResult => this.pokemons = myResult.data);
    this.nbPokemon += 10;
  }

  onScroll() {
    this.pokemonService.getPokemons(10, this.nbPokemon).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data) );
    this.nbPokemon += 10;
  }
}

