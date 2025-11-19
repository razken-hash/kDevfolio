import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header, Home, Contact, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kDevfolio');
}
