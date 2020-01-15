import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import {PokemonService} from "../../pokemons/pokemon.service";
import {Token} from "../../models/token.model";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  checkoutForm;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  tokenUser: Token;
  erreurHttp;

  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    sessionStorage.clear();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  login(customerData){
    console.warn('login/passwd :', customerData);
    // console.log(this.checkoutForm);
    this.pokemonService.login(this.checkoutForm.value).pipe(
        tap(myResult => {
              sessionStorage.setItem("token", myResult.access_token), sessionStorage.setItem("refresh", myResult.refresh_token),
              sessionStorage.setItem("expire", myResult.expires_in);
              this.testLogin();
            })
        ).subscribe();
    console.log(sessionStorage.getItem("token"));
    console.log(sessionStorage.getItem("refresh"));
    console.log(sessionStorage.getItem("expire"));

  }

  testLogin(){
    if (sessionStorage.getItem("token") != null){
      console.log("c'est good");
      this.router.navigate(["/pokedex"]);
    }
  }

}
