import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Redux
import 'rxjs/add/operator/filter';

import { Hero } from '$models/hero';

type HeroFormData = Hero;

@Component({
  selector: 'fapp-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  // Use OnPush to tell Angular our component is a pure function
  // (i.e. only changes when its Inputs change) and allow it to
  // optimize change detection.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent {
  private heroForm: FormGroup;
  private _hero: Hero;

  @Input()
  set hero(hero: Hero) {
    this.setHero(hero);
  }
  get hero(): Hero {
    return this._hero;
  }

  @Input() error = '';

  @Output() onGoBack = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Hero>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  /* User Actions */

  revert(): void {
    // Trigger setHero with the original hero to reset state
    this.setHero(this._hero);
  }

  save(): void {
    this.onSave.emit(this.getHeroFromFormData());
  }

  goBack(): void {
    this.onGoBack.emit();
  }

  /* Component methods */

  private setHero(hero: Hero) {
    if (!hero) {
      return;
    }

    const formData = this.getFormDataFromHero(hero);

    this._hero = hero;
    this.heroForm = this.formBuilder.group(formData);
    this.error = '';
  }

  /* Data Transformations */

  private getFormDataFromHero(hero: Hero): HeroFormData {
    if (!hero) {
      return null;
    }

    return {
      id: hero.id,
      name: hero.name,
      info: hero.info,
      sidekick: hero.sidekick,
    };
  }

  private getHeroFromFormData(): Hero {
    if (!this.heroForm) {
      return null;
    }

    const formData = <HeroFormData>this.heroForm.value;

    return {
      ...this._hero,
      name: formData.name as string,
      info: formData.info,
      sidekick: formData.sidekick,
    };
  }
}
