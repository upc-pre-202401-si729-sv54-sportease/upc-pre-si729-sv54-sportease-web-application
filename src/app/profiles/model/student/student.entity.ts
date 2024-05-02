export class PaymentDate {
  id: number = 0;
  publication: string = '';
  expiration: string = '';
}

export class Student {
  id: number = 0;
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  category: number = 0;
  type: string = '';
  paymentDates: PaymentDate[] = [];
  paymentExpiration: string = '';
}
