import {Component, Inject} from '@angular/core';
import {StudentService} from "../../../public/services/student/student.service";

@Component({
  selector: 'app-home-students',
  templateUrl: './home-students.component.html',
  styleUrl: './home-students.component.css'
})
export class HomeStudentsComponent{
  selected: Date | null = null;
  student: any;
  hasPendingPayments: boolean = false;
  nextPayment: any;

  constructor(private studentService: StudentService) {
  }
  ngOnInit() {
    this.studentService.getStudentData(1).subscribe(student => {
      this.student = student;
      this.hasPendingPayments = this.studentService.hasPendingPayments(student);
      this.nextPayment = this.studentService.getNextPayment(student);
    });
  }
}


