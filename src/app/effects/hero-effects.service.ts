import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Heroes } from '$store/index';
import { HeroService } from '$services/hero.service';
import { Hero } from '$models/hero';

@Injectable()
export class HeroEffects {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  // non-dispatching effects
  // @Effect({ dispatch: false }) logActions$ =

  @Effect() createHero$: Observable<Action>
    = this.actions$
      .ofType(Heroes.CREATE_HERO_REQUEST)
      .switchMap((action: Heroes.CreateHeroRequest) =>
        this.heroService.create(action.payload.name)
          .then(hero => new Heroes.CreateHeroSuccess(action, hero))
          .catch(error => new Heroes.CreateHeroFailure(action, error)),
      );

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  constructor(
    private http: Http,
    private actions$: Actions,
    private heroService: HeroService,
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
