import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, NgSelectOption } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

import { Address, SelectOption } from '../../models/contact.models';
import { BarangaysList, CitiesList, Provinces, PhoneTypes } from '../../constants/data';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../../constants/data';

@Component({
  selector: 'song-contact-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit {
  provinces = Provinces;
  cities = CitiesList;
  barangays = BarangaysList;
  phoneTypes = PhoneTypes;
  contactForm = this.formBuilder.group({
    id: [0],
    firstName: ['', [
      Validators.required,
      Validators.minLength(5),
    ]],
    lastName: ['', [
      Validators.required
    ]],
    birthday: ['', Validators.required],
    phone: this.formBuilder.group({
      phoneNumber: [0, [
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
      postalCode: [0, [
        Validators.required,
      ]],
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // Set values of form for edit action
    this.activatedRoute.params.subscribe(({ id: paramId }) => {
      if (paramId !== null) {
        // Iterate and fetch the contact with the ID
        const [editContact] = Contacts?.filter((contact) => contact.id === parseInt(paramId));
        this.contactForm.setValue(editContact);
      }
    });    
  }

  exitForm() {
    this.router.navigate(['/home'])
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
