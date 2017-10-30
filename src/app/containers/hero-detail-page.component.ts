// import { Component /*, ChangeDetectionStrategy */ } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

// Redux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { AppState, Heroes } from '$store/index';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail-page',
  template: `
    <fapp-hero-detail
      [hero]="selectedHero$ | async"
      [error]="error$ | async"
      (goBack)="goBack()"
      (save)="updateHero($event)"
    >
    </fapp-hero-detail>
    <fapp-hero-detail
      [hero]="selectedHero$ | async"
      [error]="error$ | async"
      (goBack)="goBack()"
      (save)="updateHero($event)"
    >
    </fapp-hero-detail>
  `,
  styles: [`
  `],
})
export class HeroDetailPageComponent implements OnInit, OnDestroy {
  selectedHeroId$ = new BehaviorSubject('');
  selectedHero$: BehaviorSubject<Hero> = new BehaviorSubject(null);
  heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject([]);
  error$ = new BehaviorSubject('');

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location,
  ) {}

  /* LifeCycle methods */

  ngOnInit(): void {
    this.getHeroes();
    this.getSelectedHero();
    this.getSelectedHeroId();

    this.heroes$.subscribe(heroes => {
      console.log('[heroes$] =>', { heroes });
    });
    this.selectedHero$.subscribe(hero => {
      console.log('[selectedHero$] =>', { hero });
    });
    this.selectedHeroId$.subscribe(id => {
      console.log('[selectedHeroId$] =>', { id });
    });
  }

  ngOnDestroy(): void {
    // dispose of all created observables
    this.selectedHeroId$.unsubscribe();
    this.selectedHero$.unsubscribe();
    this.heroes$.unsubscribe();
    this.error$.unsubscribe();
  }

  /* Container methods */

  updateHero(hero: Hero): void {
    this.store.dispatch(new Heroes.UpdateHeroRequest({ hero }));
  }

  goBack(): void {
    this.location.back();
  }

  private getHeroes(): void {
    // Connect component's heroes to store's heroes
    this.store.select(Heroes.Selectors.getHeroes)
      .subscribe(this.heroes$);

    // Dispatch request to populate the store's heroes
    this.store.dispatch(new Heroes.GetHeroesRequest());
  }

  private getSelectedHero(): void {
    // Connect selected hero to heroes list
    Observable
      .combineLatest(this.heroes$, this.selectedHeroId$)
      .do(([heroes, id]) => console.warn('combineLatest', { heroes, id }))
      .map(([heroes, id]) => [heroes.find(h => h.id === id), id])
      .do(([heroes, id]) => console.warn('map', { heroes, id }))
      .switchMap(([hero, id]) => {
        console.log('[switchMap]', { hero, id });
        if (hero === undefined) {
          return Observable.throw(`Unable to find hero #${id}`);
        }

        return Observable.of(hero);
      })
      .do(([heroes, id]) => console.warn('switchMap', { heroes, id }))
      .subscribe(
        hero => this.selectedHero$.next(hero),
        error => {
          this.showError(error);
          console.error(error);
        },
      );
  }

  private getSelectedHeroId(): void {
    this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .subscribe(this.selectedHeroId$);
  }

  private showError(error: string) {
    this.error$.next(error);
  }
}
