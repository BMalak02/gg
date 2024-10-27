import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'; // Assure-toi que le chemin est correct

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent // Ajoute ton composant ici

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Ajoutez vos services ici si nécessaire
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
