import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { Header } from './app/header/header';


// minimal routes
const routes: Routes = [
  { path: '', component: Header },
  { path: 'education', component: Header },
  { path: 'skills', component: Header },
  { path: 'projects', component: Header },
  { path: 'contact', component: Header },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});


