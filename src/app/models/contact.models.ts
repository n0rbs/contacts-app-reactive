export interface Contact {
  id: number | null,
  firstName: string,
  lastName: string,
  birthday: string | null,
  phone: Phone,
  address: Address
}

export interface Phone {
  phoneNumber: number,
  phoneType: string
}

export interface Address {
  houseNumber: string,
  street: string,
  barangay: string,
  city: string,
  province: string,
  postalCode: number,
}

export interface SelectOption {
  title: string,
  value: string,
}