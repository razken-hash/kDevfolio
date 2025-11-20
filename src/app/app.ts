import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [
    Header, Home, Education, Projects, Skills, Contact, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kDevfolio');
}
