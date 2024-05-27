import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../../public/model/student/student.entity";
import {StudentService} from "../../../public/services/student/student.service";

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrl: './student-group.component.css'
})
export class StudentGroupComponent implements OnInit{
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
