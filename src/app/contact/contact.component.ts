import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isSubmitting = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = {
        from_name: this.contactForm.value.fullName,
        from_email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      };



      emailjs.send(
        'service_ehxo73n',     // from EmailJS dashboard
        'template_3y94riy',    // from Email Templates
        formData,
        'c5ZDbznEj1HOVoqXV'      // from Account > API Keys
      ).then(() => {
        alert('Message sent successfully!');
        this.contactForm.reset();
        this.isSubmitting = false;
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('There was an error sending your message.');
        this.isSubmitting = false;
      });
    }
  }
}
