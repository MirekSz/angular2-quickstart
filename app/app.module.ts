import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HeroesComponent }  from './heros/heroes.component';
import {HeroDetailComponent} from "./heros/details/hero-detail.component";
import {HeroService} from "./heros/hero.service";
import {AppComponent} from "./main/app.component";
import { routing } from './app.routing';
import {DashboardComponent} from "./dashboard/dashboard.component";


@NgModule({
  imports: [ BrowserModule, FormsModule,routing ],
  declarations:[AppComponent,HeroesComponent, HeroDetailComponent,DashboardComponent],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
