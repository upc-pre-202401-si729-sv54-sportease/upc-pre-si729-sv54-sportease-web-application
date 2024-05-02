import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../profiles/services/student/student.service';
import { Student } from '../../../profiles/model/student/student.entity';

@Component({
  selector: 'app-home-administrators',
  templateUrl: './home-administrators.component.html',
  styleUrls: ['./home-administrators.component.css']
})
export class HomeAdministratorsComponent implements OnInit {
  students: Student[] = []; // Declarar students como una propiedad de tu componente

  constructor(private studentService: StudentService) { } // Inyectar StudentService en el constructor

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
    });
  }
}
