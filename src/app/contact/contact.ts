import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    // You can send this data to your backend API
  }
}