import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFile, faDownload } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';
import { CvPreview } from '../cv-preview/cv-preview';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FontAwesomeModule, CvPreview],
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
