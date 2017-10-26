import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Heroes } from '$store/index';
import { HeroService } from '$services/hero.service';

@Injectable()
export class HeroEffects {

  // non-dispatching effects
  // @Effect({ dispatch: false }) logActions$ =

  @Effect() getHeroes$: Observable<Action>
  = this.actions$
    .ofType(Heroes.GET_HEROES_REQUEST)
    .switchMap((action: Heroes.GetHeroesRequest) =>
      this.heroService.getHeroes()
        .then(heroes => new Heroes.GetHeroesSuccess(action, { heroes }))
        .catch(error => new Heroes.GetHeroesFailure(action, error)),
    );

  @Effect() createHero$: Observable<Action>
    = this.actions$
      .ofType(Heroes.CREATE_HERO_REQUEST)
      .switchMap((action: Heroes.CreateHeroRequest) =>
        this.heroService.create(action.payload.name)
          .then(hero => new Heroes.CreateHeroSuccess(action, { hero }))
          .catch(error => new Heroes.CreateHeroFailure(action, error)),
      );

  @Effect() updateHero$: Observable<Action>
    = this.actions$
      .ofType(Heroes.UPDATE_HERO_REQUEST)
      .switchMap((action: Heroes.UpdateHeroRequest) =>
        this.heroService.update(action.payload.hero)
          .then(hero => new Heroes.UpdateHeroSuccess(action, { hero }))
          .catch(error => new Heroes.UpdateHeroFailure(action, error)),
      );

  @Effect() deleteHero$: Observable<Action>
    = this.actions$
      .ofType(Heroes.DELETE_HERO_REQUEST)
      .switchMap((action: Heroes.DeleteHeroRequest) =>
        this.heroService.delete(action.payload.id)
          .then(id => new Heroes.DeleteHeroSuccess(action, { id }))
          .catch(error => new Heroes.DeleteHeroFailure(action, error)),
      );

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
  ) { }
}
