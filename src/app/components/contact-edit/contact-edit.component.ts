import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'song-contact-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit {
  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    phone: this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      phoneType: ['', Validators.required],
    }),
    address: this.formBuilder.group({
      houseNumber: ['', Validators.required],
      street: ['', Validators.required],
      barangay: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
    }),
  });

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
  }

  saveContact() {
    console.log(this.contactForm.controls.phone);
  }
}
