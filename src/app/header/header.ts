import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';

export interface NavLink {
  name: string;
  path: string;
}

interface SocialLink {
  icon: any;
  url: string;
  label: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.html',
  styles: `
  @keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}`,
})
export class Header {
  isDarkMode = true;
  mobileMenuOpen = false;
  languageMenuOpen = false;
  currentLanguage = 'FR';

  faMoon = faMoon;
  faSun = faSun;
  faGlobe = faGlobe;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  navLinks: NavLink[] = [
    { name: 'Accueil', path: 'home' },
    { name: 'Education', path: 'education' },
    { name: 'Projets', path: 'projects' },
    { name: 'Compétences', path: 'skills' },
    { name: 'Contact', path: 'contact' }
  ];

  socialLinks: SocialLink[] = [
    { icon: faGithub, url: 'https://github.com/razken-hash', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/abderrazak-kenniche-a1a213227/', label: 'LinkedIn' }
  ];

  languages: Language[] = [
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' }
  ];

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // Add your theme toggle logic here
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  selectLanguage(code: string): void {
    this.currentLanguage = code;
    this.languageMenuOpen = false;
    // Add your language change logic here
    console.log('Language changed to:', code);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const languageButton = document.getElementById('language-button');
    const languageMenu = document.getElementById('language-menu');

    if (languageButton && languageMenu) {
      if (!languageButton.contains(target) && !languageMenu.contains(target)) {
        this.languageMenuOpen = false;
      }
    }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }

}