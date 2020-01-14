import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonService} from '../pokemon.service';
import {MatSidenav} from '@angular/material';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  nbPokemon = 0;
  limit = 20;
  search: string; // test

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons(this.limit, this.nbPokemon).subscribe(myResult => this.pokemons = myResult.data);
    this.nbPokemon += this.limit;
  }

  onScroll() {
    // tslint:disable-next-line:max-line-length
    this.pokemonService.getPokemons(this.limit, this.nbPokemon).subscribe(myResult => this.pokemons.push.apply(this.pokemons, myResult.data) );
    this.nbPokemon += this.limit;
  }

  setPokemonSelected(pokemon: Pokemon) {
    this.pokemonService.setData(pokemon);
  }

  getPokemonResearch() {
    this.pokemons = this.pokemonService.getDataResearch();
  }

  searchPokemon(search: string) {
    this.search = search;
    if (search === '' || search == null) {
      console.log({search});
      this.nbPokemon = 0;
      this.limit = 20;
      this.ngOnInit();
    } else {
      this.pokemonService.searchPokemons(search).subscribe(
        result => this.pokemons = result.data
      );
      // this.nbPokemonSearch = 20;
    }
  }


}

