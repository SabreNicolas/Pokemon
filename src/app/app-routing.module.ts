import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemons/pokemon-detail/pokemon-detail.component';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';
import {ConnexionComponent} from "./utilisateurs/connexion/connexion.component";


const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokedex', component: PokedexComponent },
  // { path: 'detail/:id', component: PokemonDetailComponent },
  // { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'login', component: ConnexionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
