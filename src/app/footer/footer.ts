import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavLink } from '../header/header';



interface SocialLink {
  icon: any;
  url: string;
  label: string;
}

interface TechStack {
  name: string;
  icon: string;
}


@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {

  faMoon = faMoon;
  faSun = faSun;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  navLinks: NavLink[] = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  socialLinks: SocialLink[] = [
    { icon: faGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' }
  ];

  techStack: TechStack[] = [
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
  ];
}
