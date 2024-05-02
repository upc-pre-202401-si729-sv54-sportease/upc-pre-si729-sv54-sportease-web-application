export class Administrator {
  id: number = 0;
  name: string = '';
  lastName: string = ''
  type: string = '';
  email: string = '';
  password: string = '';
  categories: Category[] = [];
}

export interface Category {
  id: number;
  nameProfessor: string;
  yearCategory: number;
}
