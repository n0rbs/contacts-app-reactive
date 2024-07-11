export const Contacts = [
  {
    id: 1,
    firstName: 'Norbert',
    lastName: 'Dela Pena',
    birthday: '1999-11-01',
    phone: {
      phoneNumber: 1234423,
      phoneType: 'work',
    },
    address: {
      houseNumber: '445',
      street: 'AS Fortuna',
      barangay: 'banilad',
      city: 'mandaue',
      province: 'cebu',
      postalCode: 6014,
    }
  },
  {
    id: 2,
    firstName: 'Norbs',
    lastName: 'Dela Pena',
    birthday: '1998-11-02',
    phone: {
      phoneNumber: 123213,
      phoneType: 'work',
    },
    address: {
      houseNumber: '645',
      street: 'salvador',
      barangay: 'labangon',
      city: 'cebu',
      province: 'cebu',
      postalCode: 6014,
    }
  },
  {
    id: 3,
    firstName: 'Aston',
    lastName: 'Cano',
    birthday: '1997-11-03',
    phone: {
      phoneNumber: 273482,
      phoneType: 'home',
    },
    address: {
      houseNumber: 'IL121',
      street: 'SE Llenes',
      barangay: 'paknaan',
      city: 'mandaue',
      province: 'cebu',
      postalCode: 6014,
    }
  },
];

export const PhoneTypes = [
  { title: 'Home', value: 'home' },
  { title: 'Work', value: 'work' },
];

export const Provinces = [
  { title: 'Cebu', value: 'cebu' },
  { title: 'Manila', value: 'manila' },  
  { title: 'Negros', value: 'negros' },  
];

export const Cities = {
  cebu: [
    { title: 'Cebu city', value: 'cebu' },
    { title: 'Mandaue city', value: 'mandaue' },
    { title: 'Lapu-Laput city', value: 'lapu-lapu' },
    { title: 'Talisay city', value: 'talisay' },
  ],
  manila: [
    { title: 'Malabon city', value: 'malabon' },
    { title: 'Makati city', value: 'makati' },
  ],
};
export const CitiesList = [
  { title: 'Cebu city', value: 'cebu' },
  { title: 'Mandaue city', value: 'mandaue' },
  { title: 'Lapu-Laput city', value: 'lapu-lapu' },
  { title: 'Talisay city', value: 'talisay' },
];

export const Barangays = {
  cebu: [
    { title: 'Apas', value: 'apas' },
    { title: 'Labangon', value: 'labangon' },
  ],
  mandaue: [
    { title: 'Bakilid', value: 'bakilid' },
    { title: 'Banilad', value: 'banilad' },
  ],
};
export const BarangaysList = [
  { title: 'Bakilid', value: 'bakilid' },
  { title: 'Banilad', value: 'banilad' },
  { title: 'Paknaan', value: 'paknaan' },
  { title: 'Labangon', value: 'labangon' },
];