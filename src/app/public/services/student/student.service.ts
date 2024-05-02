import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Student} from "../../model/student/student.entity";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private baseService: BaseService<Student>) {}

  getStudentData(id: any) {
    return this.baseService.getStudentById(id, 0);
  }

  getAllStudents(){
    return this.baseService.getAll(0);
  }

  hasPendingPayments(student: any): boolean {
    // Comprueba si el estudiante tiene pagos pendientes
    return student.paymentDates.some((date: {expiration: string}) => new Date(date.expiration) > new Date());
  }

  getNextPayment(student: any): any {
    // Obtiene el próximo pago del estudiante
    return student.paymentDates.find((date: {publication: string}) => new Date(date.publication) > new Date());
  }

  // En StudentService
  getStudentsByCategory(yearCategory: number) {
    return this.baseService.getStudentsByCategory(yearCategory, 0);
  }
}
