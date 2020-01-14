import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../models/pokemon.model';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;
  route: ActivatedRoute;
  pokemonServ: PokemonService;
  loc: Location;

  constructor(private activatedRoute: ActivatedRoute, pokemonService: PokemonService, location: Location) {
    this.route = activatedRoute;
    this.pokemonServ = pokemonService;
    this.loc = location;
  }

  getPokemon(id: number) {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = null;
    this.pokemonServ.getPokemon(id).subscribe(myResult => this.pokemon = myResult);
  }

  ngOnInit() {
    // this.getPokemon();
    this.getData();
    this.getPokemon(this.pokemon.id);
  }

  goBack() {
    this.pokemon = null;
  }

  play(input: any) {
    input.play();
  }

  getData() {
    this.pokemon = this.pokemonServ.getData();
  }

}
