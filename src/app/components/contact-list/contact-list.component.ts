import { Component } from '@angular/core';
import { Contact } from '../../models/contact.models';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'song-contact-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
  })
export class ContactListComponent {
  contacts: Contact[];


  constructor() {
    this.contacts = [
      {
        id: 1,
        firstName: 'Norbert',
        lastName: 'Dela Pena',
        birthday: new Date(),
        phone: {
          phoneNumber: 1234423,
          phoneType: 'Work',
        },
        address: {
          houseNumber: '445',
          street: 'AS Fortuna',
          barangay: 'Banilad',
          city: 'Mandaue city',
          province: 'Cebu',
          postalCode: 6014,
        }
      },
      {
        id: 2,
        firstName: 'Norbs',
        lastName: 'Dela Pena',
        birthday: new Date(),
        phone: {
          phoneNumber: 123213,
          phoneType: 'Work',
        },
        address: {
          houseNumber: '645',
          street: 'Salvador',
          barangay: 'Labangon',
          city: 'Cebu city',
          province: 'Cebu',
          postalCode: 6014,
        }
      },
      {
        id: 3,
        firstName: 'Aston',
        lastName: 'Cano',
        birthday: new Date(),
        phone: {
          phoneNumber: 273482,
          phoneType: 'Home',
        },
        address: {
          houseNumber: 'IL121',
          street: 'SE Llenes',
          barangay: 'Paknaan',
          city: 'Mandaue',
          province: 'Cebu',
          postalCode: 6014,
        }
      },
 
    ]
  }
}
