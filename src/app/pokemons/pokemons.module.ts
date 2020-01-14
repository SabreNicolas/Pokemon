import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule, MatFormFieldModule,
    MatGridListModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';



@NgModule({
    declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
    exports: [
        PokemonListComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        FormsModule,
        RouterModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatIconModule,
        InfiniteScrollModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class PokemonsModule { }
