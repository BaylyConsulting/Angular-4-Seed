# XPO Logistics (NG SEED)
### This is the seed project for common and board 2 libraries.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.


## What is a bloc ?
A bloc is a site area allowing you to package multiple views within an area to deliver it to the site, an area could be a store or a user area , but the architecture of the seed is built upon the bloc architecture.

[![N|Solid](https://github.com/xpologistics/ng-xpo-seed/blob/V-2-0-0/src/assets/i/figure1.jpg?raw=true)]()


Creating a new Bloc

1. Create a folder under ```/src``` calling it your bloc name ```name.bloc```
2. populate it with the files from the example.bloc and edit it to create a new bloc (new module and component name)
3. Add the bloc to the ```/src/app/app.routes``` using the example in the routes file to know how and you are off and running.

## Using NG XPO BOARD
The dependencies for the board library are already in the system but require you to add 3 lines to the package.json, in order to use the board library do the following

#### In the `package.json`
1. add line near line 29 ``` @xpo/board": "~2.2.1 ```
2. add line near line 40 ``` "ag-grid": "https://github.com/xpologistics/ag-grid/archive/13.12.12.tar.gz", ```
3. add line near line 41 ``` "ag-grid-angular": "https://github.com/xpologistics/ag-grid-angular/archive/13.12.13.tar.gz", ```

#### In the `angular-cli.json`
1. add the following lines to this file near line 22
```
"../node_modules/ag-grid/dist/styles/ag-grid.css",
"../node_modules/ag-grid/dist/styles/theme-fresh.css"
```



then you are good to go and ready to use the board library

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

## Code Validation
Run `npm run tslint` to validate the code via lint
Run `npm run stylelint` to validate the code via stylelint
Autofix is also available just following the above command with `-fix` and it will autofix most common mistakes

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

