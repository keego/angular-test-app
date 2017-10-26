import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, Heroes } from '$store/index';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) { }

  /* Lifecycle methods */
  ngOnInit(): void {
    this.getHeroes();
  }

  /* Component methods */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new Heroes.CreateHeroRequest({ name }));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new Heroes.DeleteHeroRequest({ id: hero.id }));
  }

  getHeroes(): void {
    // Connect component's heroes to store's heroes
    this.heroes$ = this.store.select(Heroes.Selectors.getHeroes);

    // Dispatch request to populate the store's heroes
    this.store.dispatch(new Heroes.GetHeroesRequest());
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
