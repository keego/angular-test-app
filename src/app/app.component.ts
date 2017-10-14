import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Welcome to my first Angular v4 app!';

  constructor() { }

  ngOnInit() {
  }

}
