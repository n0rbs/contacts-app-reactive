import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

export const routes: Routes = [
  {
    path: 'home', component: ContactListComponent,
  },
  {
    path: 'add', component: ContactEditComponent,
  },
  {
    path: 'edit/:id', component: ContactEditComponent,
  },
  {
    path: '', component: ContactListComponent,
  },
];
