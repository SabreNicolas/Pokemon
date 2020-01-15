import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ConnexionComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule
    ],
  exports: [
      ConnexionComponent
  ]
})
export class UtilisateursModule { }
