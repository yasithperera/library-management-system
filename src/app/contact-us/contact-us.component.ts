import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  companyContact = {
    email: "sciencebysinhala@gmail.com",
    address: "Chandanasiri, Mawala, Wadduwa",
    phone: "+94 70 695 0532"

  };

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  sendEmail() {
    const templateParams = {
      user_name: this.contact.name,
      user_email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message
    };

    emailjs.send('service_9ebtzoa', 'template_5bimyui', templateParams, 'h1GLWMdwvaJOjKpG0')
      .then(
        (result) => {
          this.successMessage = 'Your message has been sent!';
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      );
  }

  resetForm() {
    this.contact = { name: '', email: '', subject: '', message: '' };
  }
}
