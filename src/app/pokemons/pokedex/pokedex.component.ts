import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Pokemon} from '../../models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
