import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
    declarations: [PokemonListComponent, PokemonDetailComponent],
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
        MatButtonModule
    ]
})
export class PokemonsModule { }
