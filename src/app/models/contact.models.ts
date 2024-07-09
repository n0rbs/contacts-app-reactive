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
  houseNumber: string,
  street: string,
  barangay: string,
  city: string,
  province: string,
  postalCode: number,
}