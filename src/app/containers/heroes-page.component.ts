// import { Component /*, ChangeDetectionStrategy */ } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';

import { AppState, Heroes } from '$store/index';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail-page',
  template: `
    <fapp-heroes
      [heroes]="heroes$ | async"
      [selectedHero]="selectedHero$ | async"
      (onAdd)="addHero($event)"
      (onDelete)="deleteHero($event)"
      (onGoToDetail)="goToHeroDetail($event)"
      (onSelect)="selectHero($event)"
    >
    </fapp-heroes>
  `,
  styles: [`
  `],
})
export class HeroesPageComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedHeroData$: Observable<{ hero: Hero, id: string }>;
  selectedHero$: Observable<Hero>;
  selectedHeroId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
  ) {
    // Connect component's heroes to store's heroes
    this.heroes$ = this.store.select(Heroes.Selectors.getHeroes)
      .filter(heroes => heroes && heroes.length > 0);

    // Connect component's selected hero id to the id param in the url
    this.selectedHeroId$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .filter(id => !!id);
    // this.selectedHeroId$ = this.store.select(Heroes.Selectors.getSelectedHeroId);

    // Connect selected hero to heroes list & selected id
    this.selectedHeroData$ = Observable
      .combineLatest(
        this.heroes$, this.selectedHeroId$,
        (heroes, id) => ({
          hero: heroes.find(h => h.id === id),
          id,
        }),
      );

    this.selectedHero$ = this.selectedHeroData$
      .map(({ hero }) => hero);
  }

  /* LifeCycle methods */

  ngOnInit(): void {
    this.getHeroes();
  }

  /* Container methods */

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new Heroes.CreateHeroRequest({ name }));
  }

  deleteHero(id: string): void {
    this.store.dispatch(new Heroes.DeleteHeroRequest({ id }));
  }

  goToHeroDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }

  selectHero(id: string): void {
    console.warn('TODO', 'selectHero', id);
    // this.selectedHero = hero;
  }

  private getHeroes(): void {
    // Dispatch request to populate the store's heroes
    this.store.dispatch(new Heroes.GetHeroesRequest());
  }
}
