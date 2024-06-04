export class Administrator {
  id: number = 0;
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  payment: Object = [];

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.payment = new Object();
  }
}
