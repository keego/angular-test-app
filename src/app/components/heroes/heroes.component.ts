import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Hero } from '$models/hero';

@Component({
  selector: 'fapp-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // Use OnPush to tell Angular our component is a pure function
  // (i.e. only changes when its Inputs change) and allow it to
  // optimize change detection.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  @Input() heroes: Hero[];
  @Input() selectedHero: Hero;

  @Output() onAdd = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();
  @Output() onGoToDetail = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<string>();

  constructor(
  ) { }

  /* Component methods */

  add(name: string): void {
    this.onAdd.emit(name);
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }

  goToDetail(id: string): void {
    this.onGoToDetail.emit(id);
  }

  select(id: string): void {
    this.onSelect.emit(id);
  }
}
