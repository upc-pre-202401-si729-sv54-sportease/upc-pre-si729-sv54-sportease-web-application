import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../public/services/student/student.service';
import { Student } from '../../../public/model/student/student.entity';
import {Administrator} from "../../../public/model/administrator/administrator.entity";
import {AdministratorService} from "../../../public/services/administrator/administrator.service";

@Component({
  selector: 'app-home-administrators',
  templateUrl: './home-administrators.component.html',
  styleUrls: ['./home-administrators.component.css']
})
export class HomeAdministratorsComponent implements OnInit {
  students: Student[] = [];
  administrator: Administrator = {} as Administrator;
  studentsCount: number = 0;
  studentsByCategory: { [key: number]: number } = {};
  studentsWithPendingPayments: Student[] = [];
  studentsWithPendingPaymentsCount: number = 0;
  upcomingPayments: number = 0;
  constructor(private studentService: StudentService, private administratorService: AdministratorService) { }
  ngOnInit(): void {
    this.administratorService.getAdministratorData(1).subscribe(admin => {
      this.administrator = admin;
    });


    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
      this.studentsCount = students.length;
      this.students = students.map(student => {
        student.paymentExpiration = student.paymentDates[0]?.expiration;
        return student;
      });

      // Calcular el número de estudiantes por categoría
      this.studentsByCategory = students.reduce((acc: { [key: number]: number }, student) => {
        acc[student.category] = (acc[student.category] || 0) + 1;
        return acc;
      }, {});

      // Filtrar estudiantes con pagos pendientes
      const today = new Date();
      this.studentsWithPendingPayments = students.filter(student =>
        student.paymentDates.some(paymentDate => new Date(paymentDate.expiration) < today)
      );

      // Calcular el número de estudiantes con pagos pendientes
      this.studentsWithPendingPaymentsCount = this.studentsWithPendingPayments.length;

      // Calcular el número de próximos pagos
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(today.getDate() + 7);
      this.upcomingPayments = students.reduce((acc, student) => {
        acc += student.paymentDates.filter(paymentDate => {
          const expirationDate = new Date(paymentDate.expiration);
          return expirationDate > today && expirationDate < oneWeekFromNow;
        }).length;
        return acc;
      }, 0);
    });
  }
}
