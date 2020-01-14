import { Injectable } from '@angular/core';
import {Observable, of, Scheduler} from 'rxjs';
import {Pokemon} from '../models/pokemon.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {PagedData} from '../models/pages-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonSelected: Pokemon;
  pokemonsResearch: Pokemon[];
  pokemonsUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';
  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getPokemons(limit, offset): Observable<PagedData<Pokemon>> {
    const params = new HttpParams().set('offset', offset).set('limit', limit);
    return this.http.get<PagedData<Pokemon>>(this.pokemonsUrl, {params})
      .pipe(
        catchError(this.handleError<PagedData<Pokemon>>('getPokemons'))
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = this.pokemonsUrl + '/' + id;
    return this.http.get<Pokemon>(url)
      .pipe(
        catchError(this.handleError<Pokemon>('getPokemon id=${id}'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setData(pokemon: Pokemon) {
    this.pokemonSelected = pokemon;
  }

  getData() {
    const temp = this.pokemonSelected;
    this.clearData();
    return temp;
  }

  clearData() {
    this.pokemonSelected = undefined;
  }

  searchPokemons(term: string): Observable<PagedData<Pokemon>> {
    const params = new HttpParams().set('search', term);
    return this.http.get<PagedData<Pokemon>>(this.pokemonsUrl, {params}).pipe(
      catchError(this.handleError<PagedData<Pokemon>>('searchPokemons'))
    );
  }

  setDataResearh(pokemons: Pokemon[]) {
    this.pokemonsResearch = pokemons;
  }

  getDataResearch() {
    const temp = this.pokemonsResearch;
    this.clearDataResearch();
    return temp;
  }

  clearDataResearch() {
    this.pokemonsResearch = undefined;
  }

}
