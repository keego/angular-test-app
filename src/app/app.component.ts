import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First Angular App';
  hero: Hero = {
    id: 1,
    name: 'Montecristo',
  };
}
