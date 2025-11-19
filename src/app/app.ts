import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Home } from './home/home';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header, Home, Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kDevfolio');
}
