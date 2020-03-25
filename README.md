# AngularPtt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


### Observables, Observers and Subscriptions
Observable <--- Subscription ----> Observer
All Observables have 3 methods:
1. next()
2. error()
3. complete()

### The Stream
- Observables are streams of data (values)
    - use Operators - methods you put in between the event emission in your stream of data and your observer
        - map(data)
        - throttleTime(2000)
- Observer calls -> next() error() complete()

------------------------

Instead of
```
....snapshotChanges()
    .map(docArray => { ... })
```
you should use the `pipe()`  method provided by RxJS:

```
....snapshotChanges()
    .pipe(map(docArray => { ... }))
```
It simply wrap the RxJS operator you want to use - in this case map() . You can actually use multiple pipe()  calls on the same observable - simply chain them after each other.

For this to work, you'll need to import the map()  method though:

`import { map } from 'rxjs/operators'; `

After adding this at the top of your file, you should be good to go.

----------------------------