export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  birthday: Date | null,
  phone: Phone,
  address: Address
}

export interface Phone {
  phoneNumber: number,
  phoneType: string
}

export interface Address {
  houseNumber: string | null,
  street: string | null,
  barangay: string,
  city: string,
  province: string,
  postalCode: number,
}

export interface SelectOption {
  title: string,
  value: string,
}