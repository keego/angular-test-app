import { Component, Input, Output, OnInit, OnChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Redux
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit, OnChanges {
  private _hero: Hero;

  @Input()
  set hero(hero: Hero) {
    this.setHero(hero);
  }
  get hero(): Hero {
    return this._hero;
  }

  @Input() error = '';

  @Output() goBack = new EventEmitter<void>();
  @Output() save = new EventEmitter<Hero>();
  heroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  /* LifeCycle methods */

  ngOnInit(): void {
    // this.getHero();

    // console.log('hero', { hero: this.hero$.getValue() });
    // this.hero$.subscribe(hero => this.setHero(hero));
    console.log('hero', { hero: this.hero });
  }

  ngOnChanges(): void {
    console.log('ngOnChanges(): recieved new hero');
    // this.setFormDataFromHero();
  }

  /* User Actions */

  // save(): void {
    // this.hero = this.getHeroFromFormData();
    // this.store.dispatch(new Heroes.UpdateHeroRequest({ hero: this.hero }));
  // }

  revert(): void {
    // Trigger setHero with the original hero to reset state
    this.setHero(this._hero);
    // this.setFormDataFromHero();
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
    if (!hero) {
      return;
    }

    this._hero = hero;
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
    console.log('[getFormDataFromHero]', hero);
    return {
      id: hero.id,
      name: hero.name,
      info: hero.info,
      sidekick: hero.sidekick,
    };
  }

  getHeroFromFormData(): Hero {
    if (!this.heroForm) {
      return null;
    }

    const formModel = this.heroForm.value;
    console.log('getHeroFromFormData()', { hero: this._hero });
    return {
      ...this._hero,
      name: formModel.name as string,
      info: formModel.info,
      sidekick: formModel.sidekick,
    };
  }
}
