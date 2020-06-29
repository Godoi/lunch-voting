# system-helps
Small system that assists in the decision making for choosing a restaurant.

Although the project was simple, it was thinking about a scalable structure.
Thinking about this scalability, the modularized approach was chosen.
The intention was to maintain a cohesive structure that provides benefits for finding bugs and fixing them.

## Server
Before running the application, the [lunch-voting-server](https://docs.cypress.io/guides/overview/why-cypress.html) service is required. It is available to clone in `https://docs.cypress.io/guides/overview/why-cypress.html`. 

After cloning, go to the `lunch-vote-server` application directory and run the` npm install` commands to install the dependencies and `npm run start` to upload the service.

Check if the application has gone up at `http://localhost:3000`

## Installing system-helps application
Access the project and run the command `npm install`.

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `npm test` to run the tests once.
Run `npm run test: watch` or `npm run test -- --watch` to run unit tests with the option to automatically reload and search for files.
Developed in Jest [Jest](https://jestjs.io/).

## Running end-to-end tests
Run `npx cypress open or npm run cypress` to execute the end-to-end tests via [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html).

The tests are available in the <b>application</b> folder.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).