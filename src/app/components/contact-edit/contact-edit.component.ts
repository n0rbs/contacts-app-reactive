import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

import { Barangays, Cities, Provinces } from '../../constants/data';

@Component({
  selector: 'song-contact-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit {
  provinces = Provinces;
  cities = Cities;
  barangays = Barangays;
  contactForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(5),
    ]],
    lastName: ['', [
      Validators.required
    ]],
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  get firstName() {
    return this.contactForm.controls.firstName;
  }
  get lastName() {
    return this.contactForm.controls.lastName;
  }

  saveContact() {
  }
}
