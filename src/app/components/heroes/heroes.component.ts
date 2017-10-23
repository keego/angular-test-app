import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, Heroes } from '$store/index';

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
  heroesStore$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.heroesStore$ = this.store.select(Heroes.Selectors.getHeroes);
  }

  /* Lifecycle methods */
  ngOnInit(): void {
    this.getHeroes();
  }

  /* Component methods */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new Heroes.CreateHeroAction({ name }));

    // this.heroService.create(name)
    //   .then(hero => {
    //     this.heroes.push(hero);
    //     this.selectedHero = null;
    //   });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

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
