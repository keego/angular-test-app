// import { Component /*, ChangeDetectionStrategy */ } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';

// Redux
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppState, Heroes } from '$store/index';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail-page',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fapp-hero-detail
      [hero$]="selectedHero$"
    >
    </fapp-hero-detail>
  `,
  styles: [`
  `],
})
export class HeroDetailPageComponent implements OnInit {
  selectedHero$: BehaviorSubject<Hero> = new BehaviorSubject(null);
  heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject([]);

  constructor(
    // private route: ActivatedRoute,
    private store: Store<AppState>,
    // private location: Location,
  ) {}

  /* LifeCycle methods */

  ngOnInit(): void {
    this.getSelectedHero();
    this.getHeroes();

    this.heroes$.subscribe(heroes => {
      console.log('heroes$ =>', { heroes });
    });
    this.selectedHero$.subscribe(hero => {
      console.log('selectedHero$ =>', { hero });
    });
  }

  updateHero(hero: Hero): void {
    this.store.dispatch(new Heroes.UpdateHeroRequest({ hero }));
  }

  private getSelectedHero(): void {
    // Connect selected hero to heroes list
    this.heroes$
      .map(heroes => heroes[0])
      .subscribe(this.selectedHero$);
  }

  private getHeroes(): void {
    // Connect component's heroes to store's heroes
    this.store.select(Heroes.Selectors.getHeroes)
      .subscribe(this.heroes$);

    // Dispatch request to populate the store's heroes
    this.store.dispatch(new Heroes.GetHeroesRequest());
  }
}
