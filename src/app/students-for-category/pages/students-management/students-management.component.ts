import {Component, OnInit} from '@angular/core';
import {Student} from "../../../public/model/student/student.entity";
import {StudentService} from "../../../public/services/student/student.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddStudentDialogComponent} from "../../components/add-student-dialog/add-student-dialog.component";
import {DeleteStudentDialogComponent} from "../../components/delete-student-dialog/delete-student-dialog.component";

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrl: './students-management.component.css'
})
export class StudentsManagementComponent implements OnInit{
  students: Student[] = [];

  constructor(private studentService: StudentService, private route: ActivatedRoute,
              private dialog: MatDialog) { }

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
      (students: Student[]) => {
        this.students = students;
        console.log(this.students);
      },
      (error: any) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  openAddStudentDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.students.push(result);
      }
    });
  }

  openDeleteStudentDialog(studentIndex: number): void {
    const dialogRef = this.dialog.open(DeleteStudentDialogComponent);

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.students.splice(studentIndex, 1);
      }
    });
  }
}
