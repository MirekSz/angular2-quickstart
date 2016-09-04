import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../heros/heroes.component';
import { HeroService } from '../heros/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/details/hero-detail.component.html',
  styleUrls: ['app/details/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
