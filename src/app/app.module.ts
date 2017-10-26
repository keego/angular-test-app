import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// NgRx Effects
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '$effects/hero-effects.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '$services/in-memory-data.service';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Redux Store
import { AppStoreModule } from './app-store.module';

// Components
import { AppComponent } from './app.component';
import * as COMPONENTS from '$components/index';
import * as CONTAINERS from '$containers/index';
import * as PIPES from '$pipes/index';

// Services
import { HeroService } from '$services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    Object.values(COMPONENTS),
    Object.values(CONTAINERS),
    Object.values(PIPES),
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    AppStoreModule,
    EffectsModule.forRoot([
      HeroEffects,
    ]),
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
