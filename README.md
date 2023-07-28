# DEPLOYS :
Firebase : https://angular2-information.web.app/ <br>
Netlify: https://jovial-malasada-91ccbd.netlify.app/

# PROJECT RESUME: 
Step 1: Crea un nuovo progetto Angular con ng New (nome progetto) <br>
Step 2: Crea il servizio per le chiamate API , ng g services/(nomeservizio)  <br>
Nel file hacker-news.service.ts, implementa le funzioni per ottenere gli ID delle ultime notizie e i dettagli delle notizie  <br>
Step 3:Step 3: Implementa il componente per visualizzare le notizie  <br>
Step 4: ng generate config karma per implementare il test-runner  <br>
Step 5: Implementare il test al servizio e al componente  <br>
Step 6 : Fare il deploy su firebase :ng build(compilazione e creazione cartella dist) npm i firebase-tools , firebase login , firebase init imposta cartella di destinazione dist(nome progetto ) firebase deploy e si genera link.  <br>




> ![Screenshot 2023-07-28 114736](https://user-images.githubusercontent.com/128727133/256791045-f053cd3d-73ad-43de-a479-fe4f4e4c051d.png)








# Angular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
