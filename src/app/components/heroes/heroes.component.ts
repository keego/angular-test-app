import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Hero } from '$models/hero';
import { HeroService } from '$services/hero.service';

@Component({
  selector: 'fapp-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }

  /* Lifecycle methods */
  ngOnInit(): void {
    this.getHeroes();
  }

  /* Component methods */
  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes;
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
