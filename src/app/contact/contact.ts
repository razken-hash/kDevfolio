import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
}
