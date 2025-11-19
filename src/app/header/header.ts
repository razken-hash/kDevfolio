import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export interface NavLink {
  name: string;
  path: string;
}

interface SocialLink {
  icon: any;
  url: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styles: ``,
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class Header {

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

  // navLinks = [
  //   { name: 'Home', path: '/' },
  //   { name: 'Education', path: '/education' },
  //   { name: 'Skills', path: '/skills' },
  //   { name: 'Projects', path: '/projects' },
  //   { name: 'Contact', path: '#contact' },
  // ];

  isDarkMode = true;
  mobileMenuOpen = true;

  faSun = faSun;
  faMoon = faMoon;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
