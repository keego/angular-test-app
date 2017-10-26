import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

// Redux
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero$: BehaviorSubject<Hero>;
  heroForm: FormGroup;
  error: string;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  /* LifeCycle methods */

  ngOnInit(): void {
    // this.getHero();
    console.log('hero', { hero: this.hero$.getValue() });
    this.hero$.subscribe(hero => this.setHero(hero));
  }

  ngOnChanges(): void {
    console.log('ngOnChanges(): recieved new hero');
    // this.setFormDataFromHero();
  }

  /* User Actions */

  save(): void {
    // this.hero = this.getHeroFromFormData();
    // this.store.dispatch(new Heroes.UpdateHeroRequest({ hero: this.hero }));
  }

  revert(): void {
    // this.setFormDataFromHero();
  }

  goBack(): void {
    this.location.back();
  }

  /* Component methods */

  // private getHero() {
  //   let id: string;
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => {
  //       id = params.get('id');
  //       return this.store.select(Heroes.Selectors.getHeroes)
  //         .switchMap((heroes: Hero[]) => Observable.of(heroes.find(h => h.id === id)));
  //     })
  //     .subscribe(
  //       hero => this.setHero(hero),
  //       error => {
  //         this.showError(`Unable to find hero #${id}`);
  //         console.error(`Error getting hero with id ${id}`, error);
  //         return Observable.of(null);
  //       },
  //     );
  // }

  // private showError(error: string) {
  //   this.error = error;
  // }

  private setHero(hero: Hero) {
    // this.hero = hero;
    console.log('setHero', { hero });
    this.setFormDataFromHero(hero);
    this.error = '';
  }

  private setFormDataFromHero(hero: Hero): void {
    const heroFormData = this.getFormDataFromHero(hero);

    if (!this.heroForm) {
      this.heroForm = this.formBuilder.group(heroFormData);
    } else {
      this.heroForm.reset(heroFormData);
    }
  }

  /* Data Transformations */

  private getFormDataFromHero(hero: Hero = <Hero>{}): any {
    return {
      id: hero.id,
      name: hero.name,
      info: hero.info,
      sidekick: hero.sidekick,
    };
  }

  // private getHeroFromFormData(): Hero {
  //   if (!this.heroForm) {
  //     return null;
  //   }

  //   const formModel = this.heroForm.value;
  //   return {
  //     ...this.hero,
  //     name: formModel.name as string,
  //     info: formModel.info,
  //     sidekick: formModel.sidekick,
  //   };
  // }
}
