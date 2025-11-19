import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFile, faDownload } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  faArrowRight = faArrowRight;
  faFile = faFile;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faMedium = faMedium;
  faDownload = faDownload;
}
