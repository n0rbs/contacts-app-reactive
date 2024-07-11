import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, NgSelectOption } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

import { Address, SelectOption } from '../../models/contact.models';
import { Barangays, Cities, Provinces, PhoneTypes } from '../../constants/data';

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
  phoneTypes = PhoneTypes;
  tempProvinces = Array<SelectOption>;
  tempCities = Array<SelectOption>;
  tempBarangays = Array<SelectOption>;
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
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]],
      phoneType: ['', [
        Validators.required,
      ]],
    }),
    address: this.formBuilder.group({
      houseNumber: ['', [
      ]],
      street: ['', [
      ]],
      barangay: ['', [
        Validators.required,
      ]],
      city: ['', [
        Validators.required,
      ]],
      province: ['', [
        Validators.required,
      ]],
      postalCode: ['', [
        Validators.required,
      ]],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  buildAddressSelection() {
    const tempAddress = this.contactForm.controls.address.controls;
    if (!tempAddress.province.value) {
      console.log('Province required')
      return;
    } else {
      //TODO: Assign list of cities under province
      let index = 'manila';
    }
    if (!tempAddress.city.value) {
      console.log('City required')
      return;
    }
    if (!tempAddress.barangay.value) {
      console.log('Barangay required')
      return;
    }
  }

  get firstName() {
    return this.contactForm.controls.firstName;
  }
  get lastName() {
    return this.contactForm.controls.lastName;
  }
  get birthday() {
    return this.contactForm.controls.birthday;
  }
  get phoneNumber() {
    return this.contactForm.controls.phone.controls.phoneNumber;
  }
  get phoneType() {
    return this.contactForm.controls.phone.controls.phoneType;
  }
  get province() {
    return this.contactForm.controls.address.controls.province;
  }
  get city() {
    return this.contactForm.controls.address.controls.city;
  }
  get barangay() {
    return this.contactForm.controls.address.controls.barangay;
  }
  get postalCode() {
    return this.contactForm.controls.address.controls.postalCode;
  }

  saveContact() {
  }
}
