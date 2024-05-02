import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student/student.entity";
import {StudentService} from "../../services/student/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrl: './students-management.component.css'
})
export class StudentsManagementComponent implements OnInit{
  students: Student[] = [];

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const yearCategory = params['yearCategory'];
      if (yearCategory) {
        this.getStudentsByCategory(parseInt(yearCategory));
      }
    });
  }

  getStudentsByCategory(yearCategory: number) {
    this.studentService.getStudentsByCategory(yearCategory).subscribe(
      students => {
        this.students = students;
        console.log(this.students);
      },
      error => {
        console.error('Error fetching students:', error);
      }
    );
  }
}
