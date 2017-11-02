# AngularTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5 as a way to explore Angular v4 architecture. It is an extension of the [Tour of Heroes app](https://angular.io/tutorial) and the [@ngrx/example-app](https://github.com/ngrx/platform/blob/master/example-app/README.md).

View <-> State management is handled via @ngrx, an Angular implementation of Redux.
- [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) manages local app state.
- [@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) manages side effects such as api calls and remote state.

Here are some great resources I found to be helpful while creating this app.
- [Tour of Heroes tutorial](https://angular.io/tutorial)
- [Intro to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [Intro to ngRx Store](https://gist.github.com/btroncone/a6e4347326749f938510)
- [ngRx Api Docs and Example App](https://github.com/ngrx/platform)

## Setup

The usual: `npm install` or `yarn`

## Development server

Run `ng serve` and navigate to `http://localhost:4200/` (or simply run `ng serve --open`). The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## End-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
