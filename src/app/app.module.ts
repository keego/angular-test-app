import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from '$components/dashboard/dashboard.component';
import { HeroDetailComponent } from '$components/hero-detail/hero-detail.component';
import { HeroesComponent } from '$components/heroes/heroes.component';

// Services
import { HeroService } from '$services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
