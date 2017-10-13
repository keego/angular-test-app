import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Hero } from '$models/hero';
import { HeroService } from '$services/hero.service';

@Component({
  selector: 'fapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit {
  title = 'My First Angular App';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

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

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
