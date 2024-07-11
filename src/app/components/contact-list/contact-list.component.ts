import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Contacts } from '../../constants/data';
import { Contact } from '../../models/contact.models';

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
    this.contacts = Contacts;
  }
}
