import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '$models/hero';
import { HeroService } from '$services/hero.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'fapp-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  heroForm: FormGroup;
  error: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  /* LifeCycle methods */

  ngOnInit(): void {
    let id: number;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(id = +params.get('id')))
      .subscribe(
        hero => this.setHero(hero),
        error => {
          this.showError(`Unable to find hero #${id}`);
          console.error(`Error getting hero with id ${id}`, error);
          return Observable.of(null);
        },
      );
  }

  ngOnChanges(): void {
    this.setFormDataFromHero();
  }

  /* User Actions */

  save(): void {
    this.hero = this.getHeroFromFormData();
    this.heroService.update(this.hero)
      .then(() => this.setFormDataFromHero());
  }

  revert(): void {
    this.setFormDataFromHero();
  }

  goBack(): void {
    this.location.back();
  }

  /* Component methods */

  private showError(error: string) {
    this.error = error;
  }

  private setHero(hero: Hero) {
    this.hero = hero;
    this.setFormDataFromHero();
    this.error = '';
  }

  private setFormDataFromHero(): void {
    const heroFormData = this.getFormDataFromHero(this.hero);

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

  private getHeroFromFormData(): Hero {
    if (!this.heroForm) {
      return null;
    }

    const formModel = this.heroForm.value;
    return {
      ...this.hero,
      name: formModel.name as string,
      info: formModel.info,
      sidekick: formModel.sidekick,
    };
  }
}
