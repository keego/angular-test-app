import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '$services/in-memory-data.service';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from '$components/dashboard/dashboard.component';
import { HeroDetailComponent } from '$components/hero-detail/hero-detail.component';
import { HeroesComponent } from '$components/heroes/heroes.component';
import { HeroSearchComponent } from '$components/hero-search/hero-search.component';

// Services
import { HeroService } from '$services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
