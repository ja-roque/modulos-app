# ModulosLiderazgo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

IMPORTANT NOTE: This project has been developed with reveal JS to simulate presentations in html.
For it to work properly a tweak was made to the initialize function in the reveal.js file.

This line: if( initialized === true ) return;  

Was commented out since the app is a single page app and must be reinstantiated multiple times for when new data has to be shown for example: When a user moves from the text part to the presentation.


Whenever this app is reinstalled, if this fixed is not made, the presentations WILL NOT WORK. This must be changed also in production environments since NODE MODULE ARE NOT VERSIONED.

A fix must be deployed later on to be able to version this. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
