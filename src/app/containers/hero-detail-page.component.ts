// import { Component /*, ChangeDetectionStrategy */ } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

// Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { AppState, Heroes } from '$store/index';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail-page',
  template: `
    <fapp-hero-detail
      [hero]="selectedHero$ | async"
      [error]="error$ | async"
      (onGoBack)="goBack()"
      (onSave)="updateHero($event)"
    >
    </fapp-hero-detail>
  `,
  styles: [`
  `],
})
export class HeroDetailPageComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedHeroData$: Observable<{ hero: Hero, id: string }>;
  selectedHero$: Observable<Hero>;
  selectedHeroId$: Observable<string>;
  error$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location,
  ) {
    // Connect component's heroes to store's heroes
    this.heroes$ = this.store.select(Heroes.Selectors.getHeroes)
      .filter(heroes => heroes && heroes.length > 0);

    // Connect component's selected hero id to the id param in the url
    this.selectedHeroId$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .filter(id => !!id);

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

    this.error$ = this.selectedHeroData$
      .filter(({ hero }) => hero === undefined)
      .map(({ id }) => `Unable to find hero #${id}`)
      .do((msg) => console.error(msg));
  }

  /* LifeCycle methods */

  ngOnInit(): void {
    this.getHeroes();
  }

  /* Container methods */

  updateHero(hero: Hero): void {
    this.store.dispatch(new Heroes.UpdateHeroRequest({ hero }));
  }

  goBack(): void {
    this.location.back();
  }

  private getHeroes(): void {
    // Dispatch request to populate the store's heroes
    this.store.dispatch(new Heroes.GetHeroesRequest());
  }
}
