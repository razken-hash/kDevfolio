import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faArrowRight = faArrowRight;
  faFile = faFile;
}
