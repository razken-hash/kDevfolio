import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app/app-routing';


bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
