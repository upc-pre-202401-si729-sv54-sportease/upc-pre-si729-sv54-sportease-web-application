export interface Category {
  id: number;
  nameProfessor: string;
  yearCategory: number;
}

export class Administrator {
  id: number = 0;
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  categories: Category[] = [];
}
